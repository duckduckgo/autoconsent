import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_camphill-bodensee.de_5ve', ['https://camphill-bodensee.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
