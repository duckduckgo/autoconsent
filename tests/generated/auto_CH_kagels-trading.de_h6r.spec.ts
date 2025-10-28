import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_kagels-trading.de_h6r', ['https://www.kagels-trading.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
