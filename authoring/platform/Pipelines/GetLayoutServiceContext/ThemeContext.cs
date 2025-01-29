using System.Linq;
using Microsoft.Extensions.DependencyInjection;
using Sitecore;
using Sitecore.DependencyInjection;
using Sitecore.Diagnostics;
using Sitecore.LayoutService.ItemRendering.Pipelines.GetLayoutServiceContext;
using Sitecore.Web;
using Sitecore.XA.Foundation.Multisite;

namespace XmCloudAuthoring.Pipelines.GetLayoutServiceContext
{
    public class ThemeContext : IGetLayoutServiceContextProcessor
    {
        public const string ThemeKey = "Theme";

        protected ISiteInfoResolver SiteInfoResolver { get; } = ServiceLocator.ServiceProvider.GetService<ISiteInfoResolver>();

        public void Process(GetLayoutServiceContextArgs args)
        {
            Assert.ArgumentNotNull(args, nameof(args));
            if (args.ContextData.ContainsKey(ThemeKey))
            {
                return;
            }

            if (Context.Site == null || Context.Item == null)
            {
                return;
            }

            var si = SiteInfoResolver.GetSiteInfo(Context.Item);
            var project = GetProject(si);
            if (!string.IsNullOrWhiteSpace(project))
            {
                args.ContextData.Add(ThemeKey.ToLowerInvariant(), project);
            }
        }

        protected virtual string GetProject(SiteInfo siteInfo)
        {
            if (siteInfo.Properties.AllKeys.Contains(ThemeKey))
            {
                return siteInfo.Properties[ThemeKey];
            }
            return string.Empty;
        }
    }
}