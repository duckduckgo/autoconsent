import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_dr-barbara-hendel.com_qjf', ['https://dr-barbara-hendel.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
