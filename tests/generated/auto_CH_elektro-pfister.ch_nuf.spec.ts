import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_elektro-pfister.ch_nuf', ['https://elektro-pfister.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
