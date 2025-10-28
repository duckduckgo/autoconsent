import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_buhlergroup.com_xru', ['https://www.buhlergroup.com/global/en/homepage.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
