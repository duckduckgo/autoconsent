import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hugendubel.info_4dx', ['https://www.hugendubel.info/home'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
