import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_circlesportswear.com_b2q', ['https://circlesportswear.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
