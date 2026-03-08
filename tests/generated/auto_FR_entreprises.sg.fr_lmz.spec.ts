import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_entreprises.sg.fr_lmz', ['https://entreprises.sg.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
