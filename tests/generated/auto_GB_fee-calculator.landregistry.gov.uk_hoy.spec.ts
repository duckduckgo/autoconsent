import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_fee-calculator.landregistry.gov.uk_hoy', ['https://fee-calculator.landregistry.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
