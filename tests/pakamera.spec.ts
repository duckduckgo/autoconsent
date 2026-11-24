import generateCMPTests from '../playwright/runner';

generateCMPTests('pakamera.pl', ['https://www.pakamera.pl/'], {
    onlyRegions: ['PL', 'DE', 'GB', 'US'],
});
