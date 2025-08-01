import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_motoblouz.com_vyr', ['https://www.motoblouz.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
