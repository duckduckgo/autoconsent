import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_qatarairways.com_pzf', ['https://www.qatarairways.com/en/homepage.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
