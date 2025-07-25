import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_supertext.com_ucy', ['https://www.supertext.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
