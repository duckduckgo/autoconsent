import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_lectura-specs.com_0jn', ['https://www.lectura-specs.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
