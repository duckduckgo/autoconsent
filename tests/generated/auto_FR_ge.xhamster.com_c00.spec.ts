import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ge.xhamster.com_c00', ['https://ge.xhamster.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
