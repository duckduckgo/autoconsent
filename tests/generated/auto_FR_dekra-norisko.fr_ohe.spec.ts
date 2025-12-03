import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dekra-norisko.fr_ohe', ['https://www.dekra-norisko.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
