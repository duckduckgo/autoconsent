import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_mein-kraeuterkeller.de_zjh', ['https://mein-kraeuterkeller.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
