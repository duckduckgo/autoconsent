import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_aptouring.com_rxi', ['https://www.aptouring.com/en-au'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
