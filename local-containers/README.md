# Vertical Demos on XM Cloud

A headless multi-site solution focused on XM Cloud content and site management capabilities. Includes easily customizable sample sites for select industries.

✨ 42 beautiful custom components - enough to build any site you can dream up

🌍 Multisite support (3 sites ready to go, and more can easily be added)

🇨🇦 Multilingual (English and French-Canadian)

🌓 Light and dark themes

🔗 Single rendering host (with some magic to make it work for completely different sites)

🎨 Custom component variants/styles

🎯 Embedded Personalization

📄 Seamless integration with Pages

![PLAY! Website Home Page](docs/images/launchpad.JPG)

This repository is a Sitecore DXP demo that is based on [sitecorelabs/xmcloud-foundation-head](https://github.com/sitecorelabs/xmcloud-foundation-head) repository and uses:

- Sitecore XM Cloud
- Sitecore JavaScript Services (JSS)
- Next.js

You can deploy the demo in just a few clicks at [Sitecore Demo Portal](https://portal.sitecoredemo.com/), or use one of the quick starts below to run it locally.

## Quick start (front-end app)

This is the easier way to get started, as long as you have access to XM Cloud. It does not require Docker and should work on any operating system supported by Node (Mac, Windows, Linux).

1. Deploy the project to XM Cloud

2. Download (from XM Cloud Deploy app / Developer Settings tab) and add the `.env.local` file to your app folder.

3. Install dependencies and run your app.

   ```ps1
   npm install
   npm run start:connected
   ```

   Open http://localhost:3000 with your browser to see the result.
   You can start editing the pages by modifying files under the \src\rendering. The pages auto-update as you edit the files.

## Quick start (Docker)

This will work only on Windows and deploy all Content Management roles and interfaces, as well as front-end app in a container.

1. In an ADMIN terminal:

   ```ps1
   .\up.ps1
   ```

   Open https://www.sxastarter.localhost with your browser to see the front-end of the website. Content Management UI will be available at https://xmcloudcm.localhost

2. Go to `/sitecore/system/Modules/Layout Service/Rendering Contents Resolvers/Datasource Item Children Resolver` and uncheck the `Include Server URL in Media URLs` checkbox.

## Updating color palette

Go to the `src\sxastarter\src\assets\sass\abstracts\vars` and update the colors in the `_colors.scss` file. Note, that each site has it's own color set for both light and dark theme.

Note, that each site has a special `site-*` class, this allows to apply custom CSS the specific site(s).

## Connect your local host to Pages

In addition to the offical documentation https://doc.sitecore.com/xmc/en/developers/xm-cloud/connect-your-local-host-to-pages.html, some extra steps are required:

1. Remove the following code from next.config.js:

   ```ps1
   assetPrefix: publicUrl,
   ```

2. Make sure that the domain name you use, i.e. https://www.sxastarter.localhost/ is added to the SXA Site definition of the site you want to edit.

3. If using a local Docker as a back-end, make sure the JSS Editing Secret is set to what Pages is using.
