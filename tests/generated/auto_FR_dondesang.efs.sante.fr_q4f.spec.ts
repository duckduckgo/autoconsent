import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dondesang.efs.sante.fr_q4f', ['https://dondesang.efs.sante.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
