import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_clydepresbytery.org_dey', ['https://clydepresbytery.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
