import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_docs.roocode.com_8xv', ['https://docs.roocode.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
