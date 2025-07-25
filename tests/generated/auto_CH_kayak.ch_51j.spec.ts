import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_kayak.ch_51j', ['https://www.kayak.ch/?ispredir=true'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
