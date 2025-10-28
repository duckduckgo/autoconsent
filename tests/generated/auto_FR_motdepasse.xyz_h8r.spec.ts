import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_motdepasse.xyz_h8r', ['https://www.motdepasse.xyz/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
