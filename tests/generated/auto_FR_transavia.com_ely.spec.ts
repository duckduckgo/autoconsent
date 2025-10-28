import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_transavia.com_ely', ['https://www.transavia.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
