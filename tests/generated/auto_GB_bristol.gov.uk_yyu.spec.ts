import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bristol.gov.uk_yyu', ['https://www.bristol.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
