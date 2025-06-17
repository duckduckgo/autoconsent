import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_dahuasecurity.com_0', ['https://www.dahuasecurity.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
