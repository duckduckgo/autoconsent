import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_interpolis.nl_9sa', ['https://www.interpolis.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
