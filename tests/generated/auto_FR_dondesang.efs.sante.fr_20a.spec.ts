import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dondesang.efs.sante.fr_20a', ['https://dondesang.efs.sante.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
