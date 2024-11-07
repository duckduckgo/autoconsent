export const manifestVersion = chrome.runtime.getManifest().manifest_version;

// Storage abstraction: MV2 keeps everything in memory, MV3 uses chrome.storage
const storage: { [key: string]: any } = {};
export async function storageSet(obj: { [key: string]: any }): Promise<void> {
    if (manifestVersion === 2) {
        Object.assign(storage, obj);
        return;
    }
    return chrome.storage.local.set(obj);
}

export async function storageGet(key: string | null): Promise<any> {
    if (key === null) {
        if (manifestVersion === 2) {
            return storage;
        }
        return await chrome.storage.local.get(null);
    }
    if (manifestVersion === 2) {
        return storage[key];
    }
    return (await chrome.storage.local.get(key))?.[key];
}

export async function storageRemove(key: string): Promise<void> {
    if (manifestVersion === 2) {
        delete storage[key];
        return;
    }
    return chrome.storage.local.remove(key);
}
