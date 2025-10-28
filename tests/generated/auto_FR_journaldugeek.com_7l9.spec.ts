import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_journaldugeek.com_7l9', ['https://www.journaldugeek.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
