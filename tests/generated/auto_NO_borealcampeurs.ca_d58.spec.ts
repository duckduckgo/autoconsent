import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_borealcampeurs.ca_d58', ['https://borealcampers.ca/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
