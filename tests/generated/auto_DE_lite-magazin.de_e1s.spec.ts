import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lite-magazin.de_e1s', ['https://www.lite-magazin.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
