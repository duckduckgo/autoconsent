import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_cacnverslavingszorg.nl_pnv', ['https://cacnverslavingszorg.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
