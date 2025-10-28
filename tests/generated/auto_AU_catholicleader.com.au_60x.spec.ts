import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_catholicleader.com.au_60x', ['https://catholicleader.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
