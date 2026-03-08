import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bfh-csna.vpdive.com_to5', ['https://bfh-csna.vpdive.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
