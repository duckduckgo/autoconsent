import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_epflpress.org_dif', ['https://www.epflpress.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
