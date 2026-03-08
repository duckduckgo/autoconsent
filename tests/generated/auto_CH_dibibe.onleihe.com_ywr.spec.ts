import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_dibibe.onleihe.com_ywr', ['https://dibibe.onleihe.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
