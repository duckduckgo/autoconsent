import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_verbier4vallees.ch_f02', ['https://verbier4vallees.ch/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
