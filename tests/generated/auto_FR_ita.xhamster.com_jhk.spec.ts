import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ita.xhamster.com_jhk', ['https://ita.xhamster.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
