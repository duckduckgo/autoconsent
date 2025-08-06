import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_motoblouz.com_5n9', ['https://www.motoblouz.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
