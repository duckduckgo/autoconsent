import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_leonardo-hotels.com_fkz', ['https://www.leonardo-hotels.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
