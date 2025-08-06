import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_frankfurt-city-triathlon.de_p8d', ['https://www.frankfurt-city-triathlon.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
