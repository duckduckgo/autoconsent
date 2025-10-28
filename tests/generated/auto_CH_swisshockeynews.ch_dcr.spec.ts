import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_swisshockeynews.ch_dcr', ['https://swisshockeynews.ch/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
