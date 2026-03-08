import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_aargau-halbmarathon.ch_gow', ['https://aargau-halbmarathon.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
