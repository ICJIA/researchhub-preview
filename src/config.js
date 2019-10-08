module.exports = {
  agency: {
    name: 'Illinois Criminal Justice Information Authority',
    url: 'http://www.icjia.state.il.us/'
  },
  apiBaseURL:
    process.env.VUE_APP_API_BASE_URL || 'https://research.icjia-api.cloud',
  github: 'https://github.com/icjia/icjia-research-preview',
  publicPath: process.env.VUE_APP_PUBLIC_PATH || '/researchhub/preview/',
  version: '1.0.0-beta.5'
}
