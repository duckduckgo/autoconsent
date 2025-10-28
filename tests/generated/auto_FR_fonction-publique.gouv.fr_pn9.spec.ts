import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fonction-publique.gouv.fr_pn9', ['https://www.fonction-publique.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
