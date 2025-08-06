import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fruugoschweiz.com_j2a', ['https://www.fruugoschweiz.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
