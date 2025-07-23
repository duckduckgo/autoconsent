import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_readingchronicle.co.uk_ajz', ['https://www.readingchronicle.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
