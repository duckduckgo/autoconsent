import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_beatushoehlen.swiss_igk', ['https://www.beatushoehlen.swiss/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
