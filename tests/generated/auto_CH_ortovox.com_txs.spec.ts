import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ortovox.com_txs', ['https://www.ortovox.com/ch-en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
