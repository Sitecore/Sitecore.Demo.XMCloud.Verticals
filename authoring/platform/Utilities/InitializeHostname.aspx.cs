using System;
using System.Collections.Generic;

namespace XmCloudAuthoring.Utilities
{
    public partial class InitializeHostname : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            using (new Sitecore.SecurityModel.SecurityDisabler())
            {
                var name = Environment.GetEnvironmentVariable("DEMO_INSTANCE_NAME");
                var uid = Environment.GetEnvironmentVariable("DEMO_INSTANCE_UID");
                var channel = Environment.GetEnvironmentVariable("DEMO_VERCEL_CHANNEL");

                if(string.IsNullOrEmpty(name)) {
                    Response.Write("DEMO_INSTANCE_NAME is not configured.");
                    return;
                }

                var sites = new List<string>() { "Basic", "Services", "Financial" };

                foreach (var site in sites)
                {
                    var item = Sitecore.Context.Database.GetItem(
                        $"/sitecore/content/Verticals/{site}/Settings/Site Grouping/{site}");
                    using (new Sitecore.Data.Items.EditContext(item))
                    {
                        var hostName = $"{name}-{site.ToLower()}.sitecoredemo.com";
                        if (string.IsNullOrEmpty(channel))
                        {
                            hostName = $"{name}-{uid}-{site.ToLower()}.vercel.app";
                        }

                        item["HostName"] = hostName;
                    }

                }

                Response.Write("Success!");
            }
        }
    }
}
