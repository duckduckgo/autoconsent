import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_fanatical.com_h0a', ['https://www.fanatical.com/en/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
