import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_support.hpe.com_i3h', ['https://support.hpe.com/connect/s/?language=en_US'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
