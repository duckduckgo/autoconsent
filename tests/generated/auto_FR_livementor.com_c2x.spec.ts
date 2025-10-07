import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_livementor.com_c2x', ['https://www.livementor.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
