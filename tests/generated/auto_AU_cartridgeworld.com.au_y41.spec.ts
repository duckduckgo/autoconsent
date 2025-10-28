import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_cartridgeworld.com.au_y41', ['https://cartridgeworld.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
