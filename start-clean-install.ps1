Write-Host "The purpose of this script to start setup from scratch`n" -ForegroundColor Magenta
Write-Host "  1. Stop all containers`n" -ForegroundColor DarkCyan
Write-Host "  2. Docker Prune -Remove all unused containers, networks, images (both dangling and unreferenced), and optionally, volumes`n" -ForegroundColor DarkCyan
Write-Host "  3. Stop IIS, Stop/Start Host Network Service (HNS)`n" -ForegroundColor DarkCyan
Write-Host "  4. Run .\clean.ps1 from Sitecore > Docker`n" -ForegroundColor DarkCyan
Write-Host "  5. Restore Sitecore CLI Tool`n" -ForegroundColor DarkCyan
Write-Host "  6. Run .\up.ps1 from Sitecore`n" -ForegroundColor DarkCyan

Write-Host "`n`n1. Stop all containers..." -ForegroundColor Cyan

docker-compose stop; docker-compose down

Write-Host "`n`n Remove Orphan Containers" -ForegroundColor Cyan
docker-compose down --remove-orphans


Write-Host "`n`n2. Docker Prune" -ForegroundColor Cyan
docker system prune
docker rmi $(docker images --format "{{.Repository}}:{{.Tag}}" | findstr "sxastarter")


Write-Host "`n`n3. Stop IIS, Stop/Start Host Network Service (HNS)" -ForegroundColor Cyan
iisreset /stop; net stop hns; net start hns

Write-Host "`n`n4. Clean all previous build artifacts" -ForegroundColor Cyan
Push-Location docker
.\clean.ps1

Write-Host "`n`n5. Restore Sitecore CLI tool" -ForegroundColor Cyan
#Pop-Location
dotnet tool restore

Pop-Location

Write-Host "`n`n6. Run npm ci command on rendering" -ForegroundColor Cyan
Push-Location src\sxastarter\
npm install --silent
npm ci --silent
Pop-Location

Write-Host "`n`n7. Build/Compose Docker" -ForegroundColor Cyan
.\up.ps1

Write-Host "***Setup completed successfully***" -ForegroundColor Green