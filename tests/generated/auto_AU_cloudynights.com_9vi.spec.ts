import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_cloudynights.com_9vi', ['https://www.cloudynights.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
