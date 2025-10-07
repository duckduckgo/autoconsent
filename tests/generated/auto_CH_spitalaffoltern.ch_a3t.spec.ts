import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_spitalaffoltern.ch_a3t', ['https://www.spitalaffoltern.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
