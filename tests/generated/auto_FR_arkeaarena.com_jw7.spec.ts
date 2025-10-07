import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_arkeaarena.com_jw7', ['https://www.arkeaarena.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
