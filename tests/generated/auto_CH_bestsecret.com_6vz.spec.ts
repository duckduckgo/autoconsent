import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bestsecret.com_6vz', ['https://www.bestsecret.com/entrance/index.htm'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
