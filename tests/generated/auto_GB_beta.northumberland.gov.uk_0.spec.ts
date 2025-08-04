import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_beta.northumberland.gov.uk_0', ['https://beta.northumberland.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
