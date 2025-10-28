import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_furansujapon.com_hlk', ['https://furansujapon.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
