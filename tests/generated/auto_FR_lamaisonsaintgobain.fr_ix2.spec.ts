import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lamaisonsaintgobain.fr_ix2', ['https://www.lamaisonsaintgobain.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
