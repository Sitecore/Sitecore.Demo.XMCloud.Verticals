using System;

namespace XmCloudSXAStarter.Utilities
{
    public partial class InitializeHostname : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            using (new Sitecore.SecurityModel.SecurityDisabler())
            {
                var site = Request.QueryString["site"];
                var hostName = Request.QueryString["hostName"];

                if (string.IsNullOrEmpty(site) || string.IsNullOrEmpty(hostName))
                {
                    Response.Write("The 'site' or 'hostName' is not provided.");
                }

                var item = Sitecore.Context.Database.GetItem(
                    $"/sitecore/content/Verticals/{site}/Settings/Site Grouping/{site}");
                using (new Sitecore.Data.Items.EditContext(item))
                {
                    item["HostName"] = hostName;
                }

                Response.Write($"Site: {site}");
                Response.Write($"HostName: {hostName}");
                Response.Write("Success!");
            }
        }
    }
}
