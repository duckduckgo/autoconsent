import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_bedworldonline.com.au_0pt', ['https://bedworldonline.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
