import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cotesdarmor.com_170', ['https://www.cotesdarmor.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
