import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_kachelmaterialenshop.nl_elz', ['https://kachelmaterialenshop.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
