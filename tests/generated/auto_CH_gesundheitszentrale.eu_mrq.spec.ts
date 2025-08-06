import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_gesundheitszentrale.eu_mrq', ['https://www.gesundheitszentrale.eu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
