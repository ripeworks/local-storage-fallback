export default class MemoryStorage {
  _data = {};

  getItem(key) {
    return this._data.hasOwnProperty(key) ? this._data[key] : undefined
  }

  setItem(key, value) {
    return this._data[key] = String(value)
  }

  removeItem(key) {
    return delete this._data[key]
  }

  clear() {
    return this._data = {}
  }
}
