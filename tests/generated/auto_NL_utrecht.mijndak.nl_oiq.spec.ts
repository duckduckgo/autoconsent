import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_utrecht.mijndak.nl_oiq', ['https://utrecht.mijndak.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
