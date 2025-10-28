import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_comptoir.bricozor.com_x4p', ['https://comptoir.bricozor.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
