import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_tescobank.com_2o0', ['https://www.tescobank.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
