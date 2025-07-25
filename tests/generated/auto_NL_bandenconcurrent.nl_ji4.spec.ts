import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bandenconcurrent.nl_ji4', ['https://www.bandenconcurrent.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
