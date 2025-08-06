import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lite-magazin.de_ts9', ['https://www.lite-magazin.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
