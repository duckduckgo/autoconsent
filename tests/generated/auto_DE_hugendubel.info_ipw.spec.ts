import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hugendubel.info_ipw', ['https://www.hugendubel.info/home'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
