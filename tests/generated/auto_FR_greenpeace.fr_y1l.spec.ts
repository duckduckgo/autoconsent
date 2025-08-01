import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_greenpeace.fr_y1l', ['https://www.greenpeace.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
