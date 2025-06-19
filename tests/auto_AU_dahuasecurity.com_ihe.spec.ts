import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_dahuasecurity.com_ihe', ['https://www.dahuasecurity.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
