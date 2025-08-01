import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_schnittberichte.com_zvb', ['https://www.schnittberichte.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
