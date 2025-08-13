import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_help.revolut.com_5hx', ['https://help.revolut.com/help/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
