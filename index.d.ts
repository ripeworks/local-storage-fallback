type StorageFallback = Pick<Storage, 'clear' | 'getItem' | 'setItem' | 'removeItem'>

declare module 'local-storage-fallback' {
    const localStorageFallback: StorageFallback;
    export default localStorageFallback;
}
