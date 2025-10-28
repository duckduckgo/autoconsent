import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_renovationettravaux.fr_uvb', ['https://www.renovationettravaux.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
