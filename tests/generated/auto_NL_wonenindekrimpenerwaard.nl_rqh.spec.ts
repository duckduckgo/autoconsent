import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_wonenindekrimpenerwaard.nl_rqh', ['https://www.wonenindekrimpenerwaard.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
