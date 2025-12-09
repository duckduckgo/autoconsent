import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_trip.com_a93', ['https://nl.trip.com/?locale=nl-nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
