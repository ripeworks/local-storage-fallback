export default class MemoryStorage {
  constructor() {
    this._data = {};
  }

  getItem(key) {
    return this._data.hasOwnProperty(key) ? this._data[key] : null;
  }

  setItem(key, value) {
    return (this._data[key] = String(value));
  }

  removeItem(key) {
    return delete this._data[key];
  }

  clear() {
    return (this._data = {});
  }
}
