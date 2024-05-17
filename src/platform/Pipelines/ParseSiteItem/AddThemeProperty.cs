using Sitecore.XA.Foundation.Multisite;
using Sitecore.XA.Foundation.Multisite.Pipelines.ParseSiteItem;
using Sitecore.XA.Foundation.SitecoreExtensions.Extensions;

namespace XmCloudSXAStarter.Pipelines.ParseSiteItem
{
    public class AddThemeProperty : ParseSiteItemProcessorBase
    {
        private const string ThemeFieldName = "Theme";

        public override void Process(ParseSiteItemArgs args)
        {
            if (args.Item.InheritsFrom(Templates.JSSSiteDefinition.ID))
            {
                args.Properties[ThemeFieldName] = args.Item[ThemeFieldName];
            }
        }
    }
}