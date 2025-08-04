import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_brightonandhovealbion.com_1', ['https://www.brightonandhovealbion.com/home'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
