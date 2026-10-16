import generateCMPTests from '../playwright/runner';

generateCMPTests('truecaller', ['https://www.truecaller.com/'], {
    skipRegions: ['US', 'AU', 'CA', 'JP'],
});
