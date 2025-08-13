import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_centrakor.com_sae', ['https://www.centrakor.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
