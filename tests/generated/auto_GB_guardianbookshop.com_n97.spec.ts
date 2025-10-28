import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_guardianbookshop.com_n97', ['https://guardianbookshop.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
