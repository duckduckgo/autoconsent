import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bosquetsauvage.com_4pk', ['https://bosquetsauvage.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
