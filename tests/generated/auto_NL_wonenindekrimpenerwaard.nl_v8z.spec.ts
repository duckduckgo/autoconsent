import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_wonenindekrimpenerwaard.nl_v8z', ['https://www.wonenindekrimpenerwaard.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
