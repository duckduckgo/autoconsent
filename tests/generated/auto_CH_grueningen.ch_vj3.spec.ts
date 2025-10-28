import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_grueningen.ch_vj3', ['https://www.grueningen.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
