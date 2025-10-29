import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hs-heilbronn.de_elh', ['https://www.hs-heilbronn.de/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
