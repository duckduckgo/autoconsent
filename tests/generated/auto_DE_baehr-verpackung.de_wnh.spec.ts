import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_baehr-verpackung.de_wnh', ['https://www.baehr-verpackung.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
