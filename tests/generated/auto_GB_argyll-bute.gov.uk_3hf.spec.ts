import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_argyll-bute.gov.uk_3hf', ['https://www.argyll-bute.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
