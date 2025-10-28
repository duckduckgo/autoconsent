import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_plymouth.gov.uk_sr9', ['https://www.plymouth.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
