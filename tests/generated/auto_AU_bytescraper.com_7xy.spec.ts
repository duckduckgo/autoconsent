import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_bytescraper.com_7xy', ['https://bytescraper.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
