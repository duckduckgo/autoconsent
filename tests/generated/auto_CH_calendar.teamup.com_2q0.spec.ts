import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_calendar.teamup.com_2q0', ['https://calendar.teamup.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
