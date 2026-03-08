import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_elia-medical.com_ki2', ['https://elia-medical.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
