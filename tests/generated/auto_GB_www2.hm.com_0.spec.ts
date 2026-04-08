import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_www2.hm.com_0', ['https://www2.hm.com/en_gb/index.html'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
generateCMPTests('auto_GB_www2.hm.com_0', ['https://www2.hm.com/de_de/index.html'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['DE'],
});
generateCMPTests('auto_GB_www2.hm.com_0', ['https://www2.hm.com/en_us/index.html'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
generateCMPTests('auto_GB_www2.hm.com_0', ['https://www2.hm.com/en_us/index.html'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
    mobile: true,
});
