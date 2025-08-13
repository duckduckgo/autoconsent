import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_gesundheitszentrale.eu_qm8', ['https://www.gesundheitszentrale.eu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
