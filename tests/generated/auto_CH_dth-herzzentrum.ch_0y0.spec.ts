import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_dth-herzzentrum.ch_0y0', ['https://dth-herzzentrum.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
