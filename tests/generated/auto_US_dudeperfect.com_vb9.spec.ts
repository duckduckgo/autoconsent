import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_dudeperfect.com_vb9', ['https://dudeperfect.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
