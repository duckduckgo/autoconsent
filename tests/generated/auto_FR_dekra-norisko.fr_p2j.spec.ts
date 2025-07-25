import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dekra-norisko.fr_p2j', ['https://www.dekra-norisko.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
