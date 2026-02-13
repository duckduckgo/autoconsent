import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bernerwanderwege.ch_6vz', ['https://www.bernerwanderwege.ch/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
