import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_steelseries.com_2g4', ['https://steelseries.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
