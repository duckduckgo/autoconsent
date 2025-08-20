import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_autodoc.co.uk_pr1', ['https://www.autodoc.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
