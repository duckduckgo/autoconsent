import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_chopstixnoodles.co.uk_j75', ['https://chopstixnoodles.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
