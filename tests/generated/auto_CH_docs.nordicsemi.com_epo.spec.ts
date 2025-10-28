import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_docs.nordicsemi.com_epo', ['https://docs.nordicsemi.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
