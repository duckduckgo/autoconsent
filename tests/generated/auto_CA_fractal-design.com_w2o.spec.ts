import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_fractal-design.com_w2o', ['https://www.fractal-design.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
