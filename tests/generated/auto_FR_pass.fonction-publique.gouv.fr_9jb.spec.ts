import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pass.fonction-publique.gouv.fr_9jb', ['https://www.pass.fonction-publique.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
