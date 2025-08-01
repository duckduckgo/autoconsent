import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_appletutorials.de_9f9', ['https://www.appletutorials.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
