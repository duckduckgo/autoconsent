import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cabinet222-avocat.com_6e2', ['https://cabinet222-avocat.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
