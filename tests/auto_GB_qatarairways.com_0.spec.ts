import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_qatarairways.com_0', ['https://www.qatarairways.com/en-gb/homepage.html'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
