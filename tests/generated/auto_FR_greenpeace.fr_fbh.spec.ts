import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_greenpeace.fr_fbh', ['https://www.greenpeace.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
