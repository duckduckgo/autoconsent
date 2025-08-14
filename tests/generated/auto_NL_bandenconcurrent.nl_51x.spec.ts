import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bandenconcurrent.nl_51x', ['https://www.bandenconcurrent.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
