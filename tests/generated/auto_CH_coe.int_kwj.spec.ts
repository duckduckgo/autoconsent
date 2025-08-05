import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_coe.int_kwj', ['https://www.coe.int/en/web/portal/home'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
