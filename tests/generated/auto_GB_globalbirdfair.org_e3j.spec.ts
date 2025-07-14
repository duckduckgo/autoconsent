import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_globalbirdfair.org_e3j', ['https://globalbirdfair.org/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
