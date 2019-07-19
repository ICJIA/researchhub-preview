import Vue from 'vue'

export const store = Vue.observable({
  apps: [],
  articles: [],
  datasets: [],
  ready: false
})

export const mutations = {
  setApps: payload => (store.apps = payload),
  setArticles: payload => (store.articles = payload),
  setDatasets: payload => (store.datasets = payload),
  setReady: payload => (store.ready = payload)
}
