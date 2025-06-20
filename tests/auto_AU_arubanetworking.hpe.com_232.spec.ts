import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_arubanetworking.hpe.com_232', ['https://arubanetworking.hpe.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
