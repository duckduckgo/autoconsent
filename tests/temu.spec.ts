import generateCMPTests from '../playwright/runner';

generateCMPTests('temu', ['https://www.temu.com/'], {
    skipRegions: ['US', 'CA', 'AU', 'JP'],
});
