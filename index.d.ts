type StorageFallback = Pick<Storage, 'clear' | 'getItem' | 'setItem' | 'removeItem'>;
declare module 'local-storage-fallback' {
    const storage: Storage | StorageFallback;
    export default storage;

    export const CookieStorage: {
        prototype: StorageFallback;
        new(options?: object): StorageFallback;
    };

    export const MemoryStorage: {
        prototype: StorageFallback;
        new(): StorageFallback;
    };

    export function isSupported(name?: string): boolean;
}
