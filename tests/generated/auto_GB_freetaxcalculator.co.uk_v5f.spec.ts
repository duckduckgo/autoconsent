import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_freetaxcalculator.co.uk_v5f', ['https://freetaxcalculator.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
