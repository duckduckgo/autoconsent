import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_sarganserlaender.ch_7tf', ['https://www.sarganserlaender.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
