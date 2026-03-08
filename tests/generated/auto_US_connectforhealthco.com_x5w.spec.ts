import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_connectforhealthco.com_x5w', ['https://connectforhealthco.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
