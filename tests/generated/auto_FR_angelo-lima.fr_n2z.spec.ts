import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_angelo-lima.fr_n2z', ['https://angelo-lima.fr/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
