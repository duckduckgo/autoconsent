import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_marcelpaa.com_6ec', ['https://www.marcelpaa.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
