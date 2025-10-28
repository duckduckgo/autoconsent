import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_hertz.no_j2y', ['https://www.hertz.no/rentacar/reservation/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
