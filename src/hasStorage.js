const TEST_KEY = '__test'

export default function hasStorage(name = 'localStorage') {
  try {
    const storage = window[name]
    storage.setItem(TEST_KEY, '1')
    storage.removeItem(TEST_KEY)
    return true
  } catch (e) {
    return false
  }
}
