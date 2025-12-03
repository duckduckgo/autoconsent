import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_supertext.com_j0n', ['https://www.supertext.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
