import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_cb-guide.swisscom.ch_72c', ['https://cb-guide.swisscom.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
