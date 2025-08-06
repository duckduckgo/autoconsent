import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_kayak.ch_1cs', ['https://www.kayak.ch/?ispredir=true'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
