import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_westbrookcycles.co.uk_fd9', ['https://www.westbrookcycles.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
