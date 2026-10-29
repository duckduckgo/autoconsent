import generateCMPTests from '../playwright/runner';

generateCMPTests('barstoolsports-vppa', ['https://www.barstoolsports.com/'], {
    onlyRegions: ['US'],
});
