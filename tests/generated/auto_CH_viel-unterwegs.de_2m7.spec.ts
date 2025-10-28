import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_viel-unterwegs.de_2m7', ['https://viel-unterwegs.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
