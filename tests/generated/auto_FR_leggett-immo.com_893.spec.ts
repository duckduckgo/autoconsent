import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_leggett-immo.com_893', ['https://www.leggett-immo.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
