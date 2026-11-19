import generateCMPTests from '../playwright/runner';

generateCMPTests('smule', ['https://www.smule.com/'], {
    skipRegions: ['US', 'CA', 'AU', 'JP'],
});
