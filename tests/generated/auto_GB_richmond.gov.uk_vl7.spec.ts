import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_richmond.gov.uk_vl7', ['https://www.richmond.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
