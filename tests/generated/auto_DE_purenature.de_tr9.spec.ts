import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_purenature.de_tr9', ['https://www.purenature.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
