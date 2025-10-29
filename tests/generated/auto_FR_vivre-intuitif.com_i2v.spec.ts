import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_vivre-intuitif.com_i2v', ['https://vivre-intuitif.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
