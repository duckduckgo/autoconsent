import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_lesobservateurs.ch_p76', ['https://lesobservateurs.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
