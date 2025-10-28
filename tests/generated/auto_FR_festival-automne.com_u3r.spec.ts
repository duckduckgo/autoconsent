import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_festival-automne.com_u3r', ['https://www.festival-automne.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
