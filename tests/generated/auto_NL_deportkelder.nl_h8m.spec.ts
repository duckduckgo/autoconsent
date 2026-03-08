import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_deportkelder.nl_h8m', ['https://deportkelder.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
