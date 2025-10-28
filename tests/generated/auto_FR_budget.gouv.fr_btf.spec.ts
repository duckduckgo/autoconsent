import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_budget.gouv.fr_btf', ['https://www.budget.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
