import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_qatarairways.com_10t', ['https://www.qatarairways.com/en/homepage.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
