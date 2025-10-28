import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bouwbestel.nl_f10', ['https://www.bouwbestel.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
