import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dondesang.efs.sante.fr_b6s', ['https://dondesang.efs.sante.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
