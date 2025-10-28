import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_internetstore.ch_cwv', ['https://www.internetstore.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
