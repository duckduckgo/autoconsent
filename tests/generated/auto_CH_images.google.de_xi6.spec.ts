import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_images.google.de_xi6', ['https://images.google.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
