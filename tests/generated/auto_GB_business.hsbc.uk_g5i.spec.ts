import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_business.hsbc.uk_g5i', ['https://www.business.hsbc.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
