import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_knivesandtools.fr_bvv', ['https://www.knivesandtools.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
