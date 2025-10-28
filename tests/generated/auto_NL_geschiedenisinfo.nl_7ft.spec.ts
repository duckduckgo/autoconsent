import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_geschiedenisinfo.nl_7ft', ['https://www.geschiedenisinfo.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
