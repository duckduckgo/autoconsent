import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_eventbutler.ch_m9y', ['https://www.eventbutler.ch/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
