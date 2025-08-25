import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_marcelpaa.com_ncf', ['https://www.marcelpaa.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
