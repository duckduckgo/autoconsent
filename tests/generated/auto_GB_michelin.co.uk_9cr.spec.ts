import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_michelin.co.uk_9cr', ['https://www.michelin.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
