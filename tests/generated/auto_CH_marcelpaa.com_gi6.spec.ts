import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_marcelpaa.com_gi6', ['https://www.marcelpaa.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
