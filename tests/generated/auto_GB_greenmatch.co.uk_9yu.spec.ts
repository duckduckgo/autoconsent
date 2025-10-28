import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_greenmatch.co.uk_9yu', ['https://www.greenmatch.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
