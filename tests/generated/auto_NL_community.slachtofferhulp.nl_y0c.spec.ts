import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_community.slachtofferhulp.nl_y0c', ['https://community.slachtofferhulp.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
