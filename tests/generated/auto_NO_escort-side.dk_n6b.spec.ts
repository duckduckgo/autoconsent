import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_escort-side.dk_n6b', ['https://www.escort-side.dk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
