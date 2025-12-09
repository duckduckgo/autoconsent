import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_balsamhill.co.uk_73m', ['https://www.balsamhill.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
