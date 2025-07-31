import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_siberoloji.com_104', ['https://www.siberoloji.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
