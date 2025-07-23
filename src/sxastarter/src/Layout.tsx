/**
 * This Layout is needed for Starter Kit.
 */
import React, { JSX } from 'react';
import Head from 'next/head';
import {
  Placeholder,
  LayoutServiceData,
  DesignLibrary,
  RenderingType,
} from '@sitecore-content-sdk/nextjs';
import scConfig from 'sitecore.config';
import Scripts from 'src/Scripts';
import { ParallaxProvider } from 'react-scroll-parallax';
import SitecoreStyles from 'src/components/SitecoreStyles';

// Prefix public assets with a public URL to enable compatibility with Sitecore Experience Editor.
// If you're not supporting the Experience Editor, you can remove this.
const publicUrl = scConfig.api.edge.edgeUrl || '';

interface LayoutProps {
  layoutData: LayoutServiceData;
}

const Layout = ({ layoutData }: LayoutProps): JSX.Element => {
  const { route } = layoutData.sitecore;
  //const fields = route?.fields as RouteFields;
  const fields = route?.fields || {};
  const isPageEditing = layoutData.sitecore.context.pageEditing;
  const mainClassPageEditing = isPageEditing ? 'editing-mode' : 'prod-mode';
  const theme = layoutData.sitecore.context.theme as string;
  const contextSiteClass = `site-${theme?.toLowerCase()}`;
  const getFirst200Words = (text: string) => {
    return text.split(' ').slice(0, 200).join(' ');
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getFieldValue = (field: any) => {
    return field?.value?.toString() || '';
  };

  return (
    <>
      <Scripts />
      <SitecoreStyles layoutData={layoutData} />
      <Head>
        <title>{getFieldValue(fields?.Title) || 'Page'}</title>
        <link rel="icon" href={`${publicUrl}/favicon.ico`} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'anonymous'} />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <meta property="og:site" content={layoutData?.sitecore?.context?.site?.name} />
        <meta name="description" content="A Verticals demo site."></meta>
        <meta
          name="application-details"
          content={layoutData?.sitecore?.context?.site?.name}
          data-siteName={layoutData?.sitecore?.context?.site?.name}
          data-itemId={route?.itemId}
          data-itemName={route?.name}
          data-itemTitle={getFieldValue(fields?.Title)}
          data-itemLanguage={route?.itemLanguage}
          data-itemPath={layoutData?.sitecore?.context?.itemPath}
          data-itemContent={getFirst200Words(getFieldValue(fields?.Content))}
          data-itemTemplateId={route?.templateId}
          data-itemTemplateName={route?.templateName}
          data-itemCategory={getFieldValue(fields?.Category)}
        />
      </Head>

      {/* root placeholder for the app, which we add components to using route data */}
      <ParallaxProvider>
        <div className={`${mainClassPageEditing} ${contextSiteClass} body`}>
          {layoutData.sitecore.context.renderingType === RenderingType.Component ? (
            <DesignLibrary {...layoutData} />
          ) : (
            <>
              <header>
                <div id="header">
                  {route && <Placeholder name="headless-header" rendering={route} />}
                </div>
              </header>
              <main>
                <div id="content">
                  {route && <Placeholder name="headless-main" rendering={route} />}
                </div>
              </main>
              <footer>
                <div id="footer">
                  {route && <Placeholder name="headless-footer" rendering={route} />}
                </div>
              </footer>
            </>
          )}
        </div>
      </ParallaxProvider>
    </>
  );
};

export default Layout;
