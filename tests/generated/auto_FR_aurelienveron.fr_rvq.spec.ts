import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_aurelienveron.fr_rvq', ['https://aurelienveron.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
