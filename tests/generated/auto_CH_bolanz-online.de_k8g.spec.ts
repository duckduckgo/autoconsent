import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bolanz-online.de_k8g', ['https://bolanz-online.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
