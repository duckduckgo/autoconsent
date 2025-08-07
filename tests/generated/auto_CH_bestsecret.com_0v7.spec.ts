import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bestsecret.com_0v7', ['https://www.bestsecret.com/entrance/index.htm'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
