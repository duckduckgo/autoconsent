import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_bornholmenergyisland.eu_erj', ['https://bornholmenergyisland.eu/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
