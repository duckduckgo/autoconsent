import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_calculator.land_o27', ['https://www.calculator.land/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
