import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_www2.hm.com_0', ['https://www2.hm.com/en_gb/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
