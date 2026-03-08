import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_compassionindying.org.uk_91a', ['https://compassionindying.org.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
