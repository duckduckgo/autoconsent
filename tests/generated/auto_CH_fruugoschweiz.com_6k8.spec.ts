import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fruugoschweiz.com_6k8', ['https://www.fruugoschweiz.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
