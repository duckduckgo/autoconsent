import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_link.springer.com_cb6', ['https://link.springer.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
