import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_support.hpe.com_utb', ['https://support.hpe.com/connect/s/?language=en_US'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
