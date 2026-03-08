import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_flugplatz-restaurant.ch_2dj', ['https://flugplatz-restaurant.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
