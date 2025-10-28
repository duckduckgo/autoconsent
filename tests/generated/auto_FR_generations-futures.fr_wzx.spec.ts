import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_generations-futures.fr_wzx', ['https://www.generations-futures.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
