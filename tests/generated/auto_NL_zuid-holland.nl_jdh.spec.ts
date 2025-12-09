import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_zuid-holland.nl_jdh', ['https://www.zuid-holland.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
