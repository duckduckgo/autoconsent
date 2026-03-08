import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_am.lombardodier.com_cnu', ['https://am.lombardodier.com/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
