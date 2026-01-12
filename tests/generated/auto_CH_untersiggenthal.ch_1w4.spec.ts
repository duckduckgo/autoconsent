import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_untersiggenthal.ch_1w4', ['https://www.untersiggenthal.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
