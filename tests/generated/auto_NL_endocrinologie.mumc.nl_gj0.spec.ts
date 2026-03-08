import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_endocrinologie.mumc.nl_gj0', ['https://endocrinologie.mumc.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
