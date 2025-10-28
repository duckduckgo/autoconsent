import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_football.ch_27x', ['https://www.football.ch/sfv.aspx'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
