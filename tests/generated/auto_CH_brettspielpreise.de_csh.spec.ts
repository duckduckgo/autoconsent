import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_brettspielpreise.de_csh', ['https://brettspielpreise.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
