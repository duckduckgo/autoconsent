import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_papvacances.fr_elz', ['https://www.papvacances.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
