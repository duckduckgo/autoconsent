import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_centrakor.com_usn', ['https://www.centrakor.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
