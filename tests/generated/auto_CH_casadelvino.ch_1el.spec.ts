import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_casadelvino.ch_1el', ['https://www.casadelvino.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
