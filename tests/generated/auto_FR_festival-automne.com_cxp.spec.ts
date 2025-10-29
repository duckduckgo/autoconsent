import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_festival-automne.com_cxp', ['https://www.festival-automne.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
