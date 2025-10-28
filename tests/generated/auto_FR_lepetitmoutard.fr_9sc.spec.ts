import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lepetitmoutard.fr_9sc', ['https://www.lepetitmoutard.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
