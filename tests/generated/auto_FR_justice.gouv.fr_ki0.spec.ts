import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_justice.gouv.fr_ki0', ['https://www.justice.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
