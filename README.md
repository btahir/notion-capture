# Notion Capture

This starter shows how to use the new Notion API with Next.js. You can capture emails that will populate a Notion database.

You can see the live demo [here](https://notion-capture.vercel.app).

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example).

## How to use

Change into the project directory and run the following command:

```
yarn && yarn dev
```

### Update Notion Keys

You need to add the following to your env.local file

```
MY_NOTION_TOKEN=
DATABASE_ID=
```

You can find more details on how to get these [here](https://developers.notion.com/).

### Update Site Metadata

You can update your site metadata in the next.config.js file. 

```
env: {
  siteTitle: 'Your Company',
  siteDescription: 'Your company description.',
  siteKeywords: 'your company keywords',
  siteUrl: 'https://notion-capture.vercel.app',
  siteImagePreviewUrl: '/images/preview.png',
  twitterHandle: '@your_handle'
} 
```

### Update Colors

You can update the color palette in tailwind.config.js file.

```
colors: {
  palette: {
    light: '',
    primary: '',
    dark: '',
  },
},
```
### Update Progressive Web App (PWA) data

Update the manifest.json file and the icons under the public/images/icons folder.

You can use free tools online such as https://realfavicongenerator.net/ to quickly generate all the different icon sizes and favicon.ico file.

## Want to have someone set it up for you?

Hit me up on [Twitter](https://twitter.com/deepwhitman) and let's chat :)
