import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_aqualisa.co.uk_io9', ['https://www.aqualisa.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
