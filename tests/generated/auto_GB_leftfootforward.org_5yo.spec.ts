import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_leftfootforward.org_5yo', ['https://leftfootforward.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
