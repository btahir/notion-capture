const withPWA = require('next-pwa')

module.exports = withPWA({
  future: { webpack5: true },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  env: {
    siteTitle: 'Your Company',
    siteDescription: 'Your company description.',
    siteKeywords: 'your company keywords',
    siteUrl: 'https://notioncapture.vercel.app',
    siteImagePreviewUrl: '/images/preview.png',
    twitterHandle: '@your_handle'
  },
})
