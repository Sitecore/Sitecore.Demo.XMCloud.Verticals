/**
 * This Layout is needed for Starter Kit.
 */
import React from 'react';
import Head from 'next/head';
import { Placeholder, LayoutServiceData, Field, HTMLLink } from '@sitecore-jss/sitecore-jss-nextjs';
import config from 'temp/config';
import Scripts from 'src/Scripts';
import { ParallaxProvider } from 'react-scroll-parallax';

// Prefix public assets with a public URL to enable compatibility with Sitecore Experience Editor.
// If you're not supporting the Experience Editor, you can remove this.
const publicUrl = config.publicUrl;

interface LayoutProps {
  layoutData: LayoutServiceData;
  headLinks: HTMLLink[];
}

interface RouteFields {
  [key: string]: unknown;
  Title?: Field;
}

const Layout = ({ layoutData, headLinks }: LayoutProps): JSX.Element => {
  const { route } = layoutData.sitecore;
  const fields = route?.fields as RouteFields;
  const isPageEditing = layoutData.sitecore.context.pageEditing;
  const mainClassPageEditing = isPageEditing ? 'editing-mode' : 'prod-mode';
  const theme = layoutData.sitecore.context.theme as string;
  const contextSiteClass = `site-${theme?.toLowerCase()}`;

  return (
    <>
      <Scripts />
      <Head>
        <title>{fields?.Title?.value?.toString() || 'Page'}</title>
        <link rel="icon" href={`${publicUrl}/favicon.ico`} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'anonymous'} />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <meta property="og:site" content={layoutData?.sitecore?.context?.site?.name} />
        <meta name="description" content="A Verticals demo site."></meta>
        {headLinks.map((headLink) => (
          <link rel={headLink.rel} key={headLink.href} href={headLink.href} />
        ))}
      </Head>

      {/* root placeholder for the app, which we add components to using route data */}
      <ParallaxProvider>
        <div className={`${mainClassPageEditing} ${contextSiteClass} body`}>
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
        </div>
      </ParallaxProvider>
    </>
  );
};

export default Layout;
