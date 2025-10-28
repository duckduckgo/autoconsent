import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_hertz.ch_zvz', ['https://www.hertz.ch/rentacar/reservation/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
