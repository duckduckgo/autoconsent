import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_ankhtechnologysolutions.com_tj0', ['https://ankhtechnologysolutions.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
