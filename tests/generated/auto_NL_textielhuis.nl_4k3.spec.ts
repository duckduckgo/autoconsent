import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_textielhuis.nl_4k3', ['https://www.textielhuis.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
