import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_mercedes-benz.no_exx', ['https://www.mercedes-benz.no/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
