import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_livementor.com_x24', ['https://www.livementor.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
