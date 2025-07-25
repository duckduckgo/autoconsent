import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nationaalcomputerforum.nl_3al', ['https://www.nationaalcomputerforum.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
