import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_villamedia.nl_wlh', ['https://www.villamedia.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
