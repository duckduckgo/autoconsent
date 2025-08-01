import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_archivespasdecalais.fr_27z', ['https://www.archivespasdecalais.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
