import global from './globalPrototype'

const oldPage = Page
Page = function (config) {
  config = Object.assign(config, global)
  return oldPage(config)
}