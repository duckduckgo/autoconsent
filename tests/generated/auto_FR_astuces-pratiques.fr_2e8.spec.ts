import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_astuces-pratiques.fr_2e8', ['https://www.astuces-pratiques.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
