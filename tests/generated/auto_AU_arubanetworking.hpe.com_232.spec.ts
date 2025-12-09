import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_arubanetworking.hpe.com_232', ['https://www.hpe.com/us/en/networking/hpe-aruba-networking.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
