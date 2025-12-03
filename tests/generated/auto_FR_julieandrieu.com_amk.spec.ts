import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_julieandrieu.com_amk', ['https://www.julieandrieu.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
