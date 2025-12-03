import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_edupolice.ch_q4c', ['https://www.edupolice.ch/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
