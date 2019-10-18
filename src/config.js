module.exports = {
  apiBaseURL:
    process.env.VUE_APP_API_BASE_URL || 'https://researchhub.icjia-api.cloud',
  filesBaseURL:
    process.env.VUE_APP_FILES_BASE_URL ||
    'https://icjia.illinois.gov/researchhub/files',
  github: 'https://github.com/icjia/icjia-research-preview',
  publicPath: process.env.VUE_APP_PUBLIC_PATH || '/researchhub/preview/'
}
