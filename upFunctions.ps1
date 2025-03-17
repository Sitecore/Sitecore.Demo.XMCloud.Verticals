function Validate-LicenseExpiry {
    param (
        [string]$EnvFileName =".env",
        [string]$LicenseFolderKey= "HOST_LICENSE_FOLDER"
    )

    if (-not (Test-Path $EnvFileName)) {
        Write-Host "The specified .env file does not exist."
        return
    }

    $licenseFolder = $null

    Get-Content $EnvFileName | ForEach-Object {
        $line = $_ -split '='
        if ($line.Count -eq 2 -and $line[0].Trim() -eq $LicenseFolderKey) {
            $licenseFolder = $line[1].Trim()
        }
    }

    # Validate $licenseFolder contains "license.xml" or not
    if($licenseFolder.IndexOf("license.xml", [System.StringComparison]::CurrentCultureIgnoreCase) -eq -1 )
    {
        # If the license folder does not contain the license.xml file, then we will append the file name to the path
        $licenseXmlPath = Join-Path $licenseFolder "license.xml"
    }
    else
    {
        # If the license folder contains the license.xml file, then we will use the path as is
		$licenseXmlPath = $licenseFolder
	}
 
    if (-not (Test-Path $licenseXmlPath)) {
        throw "license.xml file does not exist in the specified folder ($licenseXmlPath)."
    }

    $xml = [xml](Get-Content $licenseXmlPath)
    $expiration = $xml.SelectNodes("//expiration")[0].InnerText

    $expirationDate =[System.DateTime]::ParseExact($expiration, "yyyyMMddThhmmss", [System.Globalization.CultureInfo]::InvariantCulture)
    Write-Host "Expiration" $expirationDate
    
    if ($expirationDate -lt (Get-Date)) {
        throw "Your Sitecore license has expired, please update your license file $licenseXmlPath"
    } else {
        $daysLeft = ($expirationDate - (Get-Date)).Days
        Write-Host "The license is valid. $daysLeft days left until expiration." -ForegroundColor Green
    }
}
