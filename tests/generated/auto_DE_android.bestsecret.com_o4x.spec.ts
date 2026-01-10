import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_android.bestsecret.com_o4x', ['https://android.bestsecret.com/entrance/index.htm'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
