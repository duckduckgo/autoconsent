import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_motoculture-distri-piece.fr_ti2', ['https://www.motoculture-distri-piece.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
