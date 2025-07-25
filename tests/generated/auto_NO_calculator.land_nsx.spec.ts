import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_calculator.land_nsx', ['https://www.calculator.land/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
