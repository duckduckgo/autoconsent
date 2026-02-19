import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_autodoc.parts_01r', ['https://www.autodoc.parts/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
