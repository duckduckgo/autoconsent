import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_lectura-specs.com_h35', ['https://www.lectura-specs.com/en'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
