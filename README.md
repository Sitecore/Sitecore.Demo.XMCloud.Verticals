# Vertical Demos on XM Cloud (preview)

A headless multi-site solution focused on XM Cloud content and site management capabilities. Includes easily customizable sample sites for select industries. The project is still under development, but we expect to release the first version soon.

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

## Updating color palette

Go to the `src\sxastarter\src\assets\sass\abstracts\vars` and update the colors in the `_colors.scss` file. Note, that each site has it's own color set for both light and dark theme.

Note, that each site has a special `site-*` class, this allows to apply custom CSS the specific site(s).
