import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_chru-strasbourg.fr_157', ['https://www.chru-strasbourg.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
