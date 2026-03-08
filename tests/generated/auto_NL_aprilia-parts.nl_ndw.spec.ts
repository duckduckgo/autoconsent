import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_aprilia-parts.nl_ndw', ['https://aprilia-parts.nl/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
