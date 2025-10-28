import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_birmingham.gov.uk_338', ['https://www.birmingham.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
