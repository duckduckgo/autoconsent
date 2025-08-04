import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_qatarairways.com_n6z', ['https://www.qatarairways.com/en/homepage.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
