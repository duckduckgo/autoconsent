import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_botschaft-safiental.ch_91e', ['https://botschaft-safiental.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
