import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_mein-kraeuterkeller.de_qww', ['https://mein-kraeuterkeller.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
