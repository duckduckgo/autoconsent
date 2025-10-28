import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_nationalcrimeagency.gov.uk_7k9', ['https://www.nationalcrimeagency.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
