import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_strategie-plan.gouv.fr_a6z', ['https://www.strategie-plan.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
