import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_journalistenwatch.com_whv', ['https://journalistenwatch.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
