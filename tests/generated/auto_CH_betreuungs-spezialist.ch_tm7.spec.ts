import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_betreuungs-spezialist.ch_tm7', ['https://betreuungs-spezialist.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
