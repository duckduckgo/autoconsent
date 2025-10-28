import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_clubdesk.ch_9hp', ['https://www.clubdesk.ch/de/startseite'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
