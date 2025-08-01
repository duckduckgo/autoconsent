import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_motoculture-distri-piece.fr_u0n', ['https://www.motoculture-distri-piece.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
