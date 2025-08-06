import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_autodoc.co.uk_31s', ['https://www.autodoc.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
