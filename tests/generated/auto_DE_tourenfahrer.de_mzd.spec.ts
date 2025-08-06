import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_tourenfahrer.de_mzd', ['https://www.tourenfahrer.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
