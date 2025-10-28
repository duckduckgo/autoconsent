import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_harley-davidson.com_9qr', ['https://www.harley-davidson.com/au/en/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
