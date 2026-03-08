import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_francenotaire.notaires.fr_7jw', ['https://francenotaire.notaires.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
