import axios from 'axios'
import NProgress from 'nprogress'
import { apiBaseURL } from '@/config'
import { appFields, articleFields, datasetFields } from '@/consts/queryFields'

const client = axios.create({
  baseURL: apiBaseURL
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
  fetchDatasets,
  healthCheck
}

/**
 * @param {String} slug
 */
const fetchAppBySlug = async slug =>
  await fetchOneBySlug('apps')({ fields: appFields, slug })

const fetchApps = async () => await fetchList('apps')({ fields: appFields })

/**
 * @param {String} slug
 */
const fetchArticleBySlug = async slug =>
  await fetchOneBySlug('articles')({ fields: articleFields, slug })

const fetchArticles = async () =>
  await fetchList('articles')({ fields: articleFields })

/**
 * @param {String} slug
 */
const fetchDatasetBySlug = async slug =>
  await fetchOneBySlug('datasets')({ fields: datasetFields, slug })

const fetchDatasets = async () =>
  await fetchList('datasets')({ fields: datasetFields })

/**
 * Fetch a publisehd content with the matching slug.
 * @param {String} contentType
 * @param {[String]} fields [String]
 * @param {String} slug String
 */
const fetchOneBySlug = contentType => async ({ fields, slug }) =>
  (await fetchData(contentType)({
    params: `where: { slug: "${slug}", status: "submitted" }`,
    fields
  }))[0]

/**
 * Fetch a list of publisehd contents.
 * @param {String} contentType
 * @param {String} params
 * @param {[String]} fields [String]
 */
const fetchList = contentType => async ({ fields }) =>
  await fetchData(contentType)({
    params: 'sort: "date:desc", where: { status: "submitted" }',
    fields
  })

/**
 * Fetch data from API server.
 * @param {String} contentType
 * @param {String} params String
 * @param {String} fields [String]
 */
const fetchData = contentType => async ({ params, fields }) =>
  await fetchQueryResult(contentType)(
    `{\n  ${contentType} (${params}) {${fields.join('\n')}\n  }\n}`
  )

/**
 * Fetch graphql query results from API server.
 * @param {String} contentType
 * @param {String} query
 * @return {(query:String) => Promise<Object>}
 */
const fetchQueryResult = contentType => async query =>
  await client
    .post('graphql', { query })
    .then(({ data }) => data.data[contentType])
    .catch(err => console.error(err))

/**
 * Check API server health.
 */
const healthCheck = async (timeout = 2000) =>
  await client
    .head(`/`, { timeout })
    .then(res => res.status === 200)
    .catch(() => false)
