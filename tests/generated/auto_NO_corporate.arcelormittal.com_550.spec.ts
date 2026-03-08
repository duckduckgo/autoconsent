import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_corporate.arcelormittal.com_550', ['https://corporate.arcelormittal.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
