import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_community.join-us.nu_1au', ['https://community.join-us.nu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
