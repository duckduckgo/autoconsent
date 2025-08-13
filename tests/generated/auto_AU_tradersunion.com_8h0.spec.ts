import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_tradersunion.com_8h0', ['https://tradersunion.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
