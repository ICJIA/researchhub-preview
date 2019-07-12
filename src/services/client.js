import axios from 'axios'
import NProgress from 'nprogress'

const client = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL
})

client.interceptors.request.use(config => {
  NProgress.start()
  return config
})

client.interceptors.response.use(response => {
  NProgress.done()
  return response
})

export default client

export {
  fetchAppBySlug,
  fetchApps,
  fetchArticleBySlug,
  fetchArticles,
  fetchDatasetBySlug,
  fetchDatasets
}

async function fetchAppBySlug(slug) {
  const params = `where: { slug: "${slug}", status: "submitted" }`
  const data = await fetchData(getAppsQuery(params))
  return data.apps[0]
}

async function fetchApps() {
  const params = 'sort: "date:desc", where: { status: "submitted" }'
  const data = await fetchData(getAppsQuery(params))
  return data.apps
}

async function fetchArticleBySlug(slug) {
  const params = `where: { slug: "${slug}", status: "submitted" }`
  const data = await fetchData(getArticlsQuery(params))
  return data.articles[0]
}

async function fetchArticles() {
  const params = 'sort: "date:desc", where: { status: "submitted" }'
  const data = await fetchData(getArticlsQuery(params))
  return data.articles
}

async function fetchDatasetBySlug(slug) {
  const params = `where: { slug: "${slug}", status: "submitted" }`
  const data = await fetchData(getArticlsQuery(params))
  return data.datasets[0]
}

async function fetchDatasets() {
  const params = 'sort: "date:desc", where: { status: "submitted" }'
  const data = await fetchData(getDatasetsQuery(params))
  return data.datasets
}

async function fetchData(query) {
  const res = await client
    .post('graphql', { query })
    .catch(err => console.error(err))
  return res.data.data
}

function getAppsQuery(params) {
  return `{
    apps (${params}) {
      title
      slug
      external
      date
      categories
      tags
      image
      contributors
      description
      url
      citation
      funding
      articles (sort: "date:desc", where: { status: "published" }) {
        title
        slug
      }
      datasets (sort: "date:desc", where: { status: "published" }) {
        title
        slug
      }
    }
  }`
}

function getArticlsQuery(params) {
  return `{
    articles (${params}) {
      _id
      title
      slug
      external
      date
      categories
      tags
      splash
      thumbnail
      abstract
      authors
      images
      markdown
      citation
      doi
      funding
      mainfiletype
      mainfile {
        name
        url
      }
      extrafile {
        name
        url
      }
      apps (sort: "date:desc", where: { status: "published" }) {
        title
        slug
      }
      datasets (sort: "date:desc", where: { status: "published" }) {
        title
        slug
      }
    }
  }`
}

function getDatasetsQuery(params) {
  return `{
    datasets (${params}) {
      _id
      title
      slug
      external
      date
      categories
      tags
      sources
      timeperiod
      unit
      variables
      description
      notes
      citation
      funding
      datafile {
        name
        url
      }
      apps (sort: "date:desc", where: { status: "published" }) {
        title
        slug
      }
      articles (sort: "date:desc", where: { status: "published" }) {
        title
        slug
      }
    }
  }`
}
