import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_leftfootforward.org_it2', ['https://leftfootforward.org/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
