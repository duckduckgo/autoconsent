import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_supertext.com_vuy', ['https://www.supertext.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
