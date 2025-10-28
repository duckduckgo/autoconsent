import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bison-fute.gouv.fr_4wx', ['https://www.bison-fute.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
