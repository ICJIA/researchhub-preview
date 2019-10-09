module.exports = {
  apiBaseURL:
    process.env.VUE_APP_API_BASE_URL || 'https://research.icjia-api.cloud',
  github: 'https://github.com/icjia/icjia-research-preview',
  publicPath: process.env.VUE_APP_PUBLIC_PATH || '/researchhub/preview/'
}
