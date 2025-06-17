import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_CA_arubanetworking.hpe.com_0', ['https://arubanetworking.hpe.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
