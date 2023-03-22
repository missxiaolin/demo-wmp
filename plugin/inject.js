import plugin from './plugin';

function inject(page) {
  for (let key in plugin.$data) {
    if (Object.prototype.hasOwnProperty.call(plugin.$data, key)) { //过滤
      page.data[key] = plugin.$data[key];
    }
  }
  const obj = Object.assign({}, plugin, page);
  return obj;
}

export default (page) => {
  return inject(page)
}