# Notion Capture

This starter shows how to use the new Notion API with Next.js. You can capture emails that will populate a Notion database.

<div align="center">
<img src="https://github.com/btahir/notion-capture/blob/main/public/images/demo.gif">
<p align="center">
  <a href="https://notioncapture.vercel.app/">Live Demo</a> •
  <a href="https://nextails.com/">See more starters</a> •
  <a href="https://twitter.com/deepwhitman">Follow me on Twitter</a>
</p>
</div>

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example).

## How to use

Change into the project directory and run the following command:

```
yarn && yarn dev
```

### Update Notion Keys

You need to add the following to your env.local file (and in the environment variables in Vercel/Netlify when deployed).

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
  siteUrl: 'https://notioncapture.vercel.app',
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

### Update Image

The images are generated from the Unplash [Random API](https://source.unsplash.com/). The cool gradient effect on the images is achieved by using the Tailwind Mix Blend Mode feature. You can experiment with this effect using this [tool](https://tailblend.vercel.app/).
### Update Progressive Web App (PWA) data

Update the manifest.json file and the icons under the public/images/icons folder.

You can use free tools online such as https://realfavicongenerator.net/ to quickly generate all the different icon sizes and favicon.ico file.

## Want to have someone set it up for you?

Hit me up on [Twitter](https://twitter.com/deepwhitman) and let's chat :)

If you are looking for more choices/ production ready websites I have more [templates](https://nextails.com/) that might suit your needs.
