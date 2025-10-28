import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_informatique-consult.fr_q11', ['https://www.informatique-consult.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
