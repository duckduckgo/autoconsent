import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_kippersrijssen.nl_z78', ['https://www.kippersrijssen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
