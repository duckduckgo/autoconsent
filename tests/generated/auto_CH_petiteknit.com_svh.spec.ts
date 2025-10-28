import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_petiteknit.com_svh', ['https://www.petiteknit.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
