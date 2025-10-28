import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_tarifeambulant.fmh.ch_yak', ['https://tarifeambulant.fmh.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
