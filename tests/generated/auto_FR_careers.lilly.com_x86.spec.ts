import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_careers.lilly.com_x86', ['https://careers.lilly.com/us/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
