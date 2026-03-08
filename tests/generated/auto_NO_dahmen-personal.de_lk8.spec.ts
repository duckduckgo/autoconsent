import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_dahmen-personal.de_lk8', ['https://dahmen-personal.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
