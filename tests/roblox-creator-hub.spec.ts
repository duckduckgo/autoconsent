import generateCMPTests from '../playwright/runner';

generateCMPTests('roblox-creator-hub', ['https://create.roblox.com/'], {
    skipRegions: ['US', 'AU', 'CA', 'CH'],
});
