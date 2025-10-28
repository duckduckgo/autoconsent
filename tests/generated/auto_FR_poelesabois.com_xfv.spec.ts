import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_poelesabois.com_xfv', ['https://www.poelesabois.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
