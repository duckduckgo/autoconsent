import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_centrakor.com_tl0', ['https://www.centrakor.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
