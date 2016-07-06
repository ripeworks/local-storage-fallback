global.window.localStorage = global.window.sessionStorage = {
  _data: {},
  getItem: function (key) {
    return this._data.hasOwnProperty(key) ? this._data[key] : undefined
  },
  setItem: function (key, value) {
    this._data[key] = String(value)
  },
  removeItem: function (key) {
    return delete this._data[key]
  },
  clear: function () {
    this._data = {}
  }
}
