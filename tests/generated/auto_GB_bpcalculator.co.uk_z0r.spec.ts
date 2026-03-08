import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bpcalculator.co.uk_z0r', ['https://bpcalculator.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
