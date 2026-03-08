import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_espressorepairshop.co.uk_tsb', ['https://espressorepairshop.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
