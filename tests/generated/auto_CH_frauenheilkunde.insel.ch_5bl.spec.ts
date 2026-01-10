import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_frauenheilkunde.insel.ch_5bl', ['https://frauenheilkunde.insel.ch/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
