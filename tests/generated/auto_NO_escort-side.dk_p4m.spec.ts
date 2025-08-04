import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_escort-side.dk_p4m', ['https://www.escort-side.dk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
