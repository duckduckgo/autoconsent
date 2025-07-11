import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_readingchronicle.co.uk_8vy', ['https://www.readingchronicle.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
