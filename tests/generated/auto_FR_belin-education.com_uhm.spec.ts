import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_belin-education.com_uhm', ['https://www.belin-education.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
