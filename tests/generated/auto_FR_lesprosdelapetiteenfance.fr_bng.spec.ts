import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lesprosdelapetiteenfance.fr_bng', ['https://www.lesprosdelapetiteenfance.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
