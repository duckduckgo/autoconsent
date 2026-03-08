import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_community.commvault.com_e19', ['https://community.commvault.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
