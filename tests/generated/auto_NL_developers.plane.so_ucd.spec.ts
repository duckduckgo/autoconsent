import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_developers.plane.so_ucd', ['https://developers.plane.so/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
