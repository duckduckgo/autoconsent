import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_floravannederland.nl_ejt', ['https://www.floravannederland.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
