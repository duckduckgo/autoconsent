import generateCMPTests from '../playwright/runner';

generateCMPTests('borlabs', ['https://www.kesselheld.de/', 'https://cocoon-hotels.com/de/cocoon-salzburg/'], {
    skipRegions: ['US'],
});
