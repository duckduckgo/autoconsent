import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_wonenindekrimpenerwaard.nl_vxt', ['https://www.wonenindekrimpenerwaard.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
