import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_business.hsbc.uk_4mo', ['https://www.business.hsbc.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
