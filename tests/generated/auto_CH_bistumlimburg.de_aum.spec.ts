import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bistumlimburg.de_aum', ['https://bistumlimburg.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
