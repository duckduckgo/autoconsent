import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_havering.gov.uk_zjy', ['https://www.havering.gov.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
