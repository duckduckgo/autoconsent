import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_connectforhealthco.com_si5', ['https://connectforhealthco.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
