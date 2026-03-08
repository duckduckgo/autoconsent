import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_florafilmtheater.nl_oy2', ['https://florafilmtheater.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
