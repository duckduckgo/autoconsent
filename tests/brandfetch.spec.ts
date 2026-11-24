import generateCMPTests from '../playwright/runner';

generateCMPTests('brandfetch', ['https://brandfetch.com/'], {
    skipRegions: ['US', 'CA', 'AU', 'JP'],
});
