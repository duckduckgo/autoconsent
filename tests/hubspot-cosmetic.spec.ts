import generateCMPTests from '../playwright/runner';

// accept-only flavor: no decline button and the close button is hidden
generateCMPTests('hubspot-cosmetic', ['https://stacker.com/', 'https://www.kff.org/', 'https://www.hushmail.com/'], {
    onlyRegions: ['US'],
});
