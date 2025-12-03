import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_dahuasecurity.com_j0i', ['https://www.dahuasecurity.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
