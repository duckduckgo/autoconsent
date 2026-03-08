import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_communityenergyengland.org_u0c', ['https://communityenergyengland.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
