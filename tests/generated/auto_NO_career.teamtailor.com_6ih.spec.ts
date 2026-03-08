import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_career.teamtailor.com_6ih', ['https://career.teamtailor.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
