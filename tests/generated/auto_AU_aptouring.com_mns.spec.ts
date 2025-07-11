import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_aptouring.com_mns', ['https://www.aptouring.com/en-au'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
