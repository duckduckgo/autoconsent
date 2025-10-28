import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_akersolutions.com_fpa', ['https://www.akersolutions.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
