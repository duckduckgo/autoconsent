import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_escort-side.dk_k2b', ['https://www.escort-side.dk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
