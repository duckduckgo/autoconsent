import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_southpark.cc.com_b8i', ['https://www.southparkstudios.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
