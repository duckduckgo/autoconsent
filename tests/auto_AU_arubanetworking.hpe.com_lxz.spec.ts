import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_arubanetworking.hpe.com_lxz', ['https://arubanetworking.hpe.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
