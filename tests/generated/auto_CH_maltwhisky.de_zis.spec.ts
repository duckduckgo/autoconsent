import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_maltwhisky.de_zis', ['https://www.maltwhisky.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
