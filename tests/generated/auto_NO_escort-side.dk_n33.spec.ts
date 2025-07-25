import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_escort-side.dk_n33', ['https://www.escort-side.dk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
