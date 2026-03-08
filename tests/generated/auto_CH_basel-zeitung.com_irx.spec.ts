import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_basel-zeitung.com_irx', ['https://basel-zeitung.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
