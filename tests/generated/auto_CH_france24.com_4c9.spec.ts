import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_france24.com_4c9', ['https://www.france24.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
