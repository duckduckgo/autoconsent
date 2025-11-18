export const manifestVersion = chrome.runtime.getManifest().manifest_version;

export async function storageSet(obj: { [key: string]: any }): Promise<void> {
    return chrome.storage.local.set(obj);
}

export async function storageGet(key: string | null): Promise<any> {
    if (key === null) {
        return await chrome.storage.local.get(null);
    }
    return (await chrome.storage.local.get(key))?.[key];
}

export async function storageRemove(key: string): Promise<void> {
    return chrome.storage.local.remove(key);
}
