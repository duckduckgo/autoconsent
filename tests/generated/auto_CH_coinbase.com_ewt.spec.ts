import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_coinbase.com_ewt', ['https://www.coinbase.com/'], {
    testOptIn: false,
    testSelfTest: true,
    skipRegions: ['AU', 'CA'],
});
