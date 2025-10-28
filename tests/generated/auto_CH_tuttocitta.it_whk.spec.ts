import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_tuttocitta.it_whk', ['https://www.tuttocitta.it/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
