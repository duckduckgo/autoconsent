import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_browns-restaurants.co.uk_1w9', ['https://www.browns-restaurants.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
