import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_vie-publique.fr_kyg', ['https://www.vie-publique.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
