import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_globalbirdfair.org_6u9', ['https://globalbirdfair.org/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
