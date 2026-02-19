import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_android.bestsecret.com_m12', ['https://android.bestsecret.com/entrance/index.htm'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
