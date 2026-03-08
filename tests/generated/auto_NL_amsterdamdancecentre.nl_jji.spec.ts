import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_amsterdamdancecentre.nl_jji', ['https://amsterdamdancecentre.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
