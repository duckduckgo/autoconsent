import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_bondiwash.com.au_0wq', ['https://bondiwash.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
