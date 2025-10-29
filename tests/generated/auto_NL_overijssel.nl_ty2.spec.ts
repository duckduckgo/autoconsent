import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_overijssel.nl_ty2', ['https://www.overijssel.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
