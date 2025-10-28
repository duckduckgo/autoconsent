import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_trustdeals.ch_myj', ['https://www.trustdeals.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
