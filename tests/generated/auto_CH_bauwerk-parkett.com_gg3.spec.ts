import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bauwerk-parkett.com_gg3', ['https://www.bauwerk-parkett.com/ch-de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
