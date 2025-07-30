import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_beatushoehlen.swiss_ny0', ['https://www.beatushoehlen.swiss/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
