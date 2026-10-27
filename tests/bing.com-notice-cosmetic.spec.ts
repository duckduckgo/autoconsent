import generateCMPTests from '../playwright/runner';

generateCMPTests('bing.com-notice-cosmetic', ['https://www.bing.com/', 'https://www.bing.com/?setlang=fr-CA'], {
    onlyRegions: ['CA'],
});
