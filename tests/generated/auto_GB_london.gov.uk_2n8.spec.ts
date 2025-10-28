import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_london.gov.uk_2n8', ['https://www.london.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
