import { parse as tldtsParse } from 'tldts-experimental';
import { normalizeConfig } from '../lib/utils';
import { storageGet, storageSet } from './mv-compat';

export async function showOptOutStatus(
    tabId: number,
    status: 'success' | 'complete' | 'working' | 'available' | 'verified' | 'idle',
    cmp = '',
) {
    let title = '';
    let icon = 'icons/cookie-idle.png';
    if (status === 'success') {
        title = `Opt out successful! (${cmp})`;
        icon = 'icons/party.png';
    } else if (status === 'complete') {
        title = `Opt out complete! (${cmp})`;
        icon = 'icons/tick.png';
    } else if (status === 'working') {
        title = `Processing... (${cmp})`;
        icon = 'icons/cog.png';
    } else if (status === 'verified') {
        title = `Verified (${cmp})`;
        icon = 'icons/verified.png';
    } else if (status === 'idle') {
        title = 'Idle';
        icon = 'icons/cookie-idle.png';
    } else if (status === 'available') {
        title = `Click to opt out (${cmp})`;
        icon = 'icons/cookie.png';
    }
    console.log('Setting action state to', status);
    const action = chrome.action || chrome.pageAction;
    if (chrome.pageAction) {
        chrome.pageAction.show(tabId);
    }
    await action.setTitle({
        tabId,
        title,
    });
    await action.setIcon({
        tabId,
        path: icon,
    });
}

export async function initConfig() {
    const storedConfig = (await storageGet('config')) || {};
    console.log('storedConfig', storedConfig);
    const updatedConfig = normalizeConfig(storedConfig);
    updatedConfig.enableHeuristicDetection = true;
    console.log('updated config', updatedConfig);
    await storageSet({
        config: updatedConfig,
    });
}

export async function isEnabledForDomain(domain: string) {
    const storedExceptions = (await storageGet('exceptions')) || [];
    console.log('stored exceptions', storedExceptions);
    const parsed = tldtsParse(domain);
    return !storedExceptions.includes(parsed.domain);
}

export async function setIsEnabledForDomain(domain: string, isEnabled: boolean) {
    const parsed = tldtsParse(domain);
    const storedExceptions = (await storageGet('exceptions')) || [];
    const index = storedExceptions.indexOf(parsed.domain);
    let changed = false;
    if (isEnabled && index > -1) {
        storedExceptions.splice(index, 1);
        changed = true;
    } else if (!isEnabled && index === -1) {
        storedExceptions.push(parsed.domain);
        changed = true;
    }
    if (changed) {
        await storageSet({
            exceptions: storedExceptions,
        });
    }
}
