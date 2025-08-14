import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nationaalcomputerforum.nl_4sn', ['https://www.nationaalcomputerforum.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
