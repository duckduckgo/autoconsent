import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bradford.gov.uk_8g5', ['https://www.bradford.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
