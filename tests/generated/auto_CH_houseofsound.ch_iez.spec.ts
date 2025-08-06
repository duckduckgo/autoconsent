import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_houseofsound.ch_iez', ['https://www.houseofsound.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
