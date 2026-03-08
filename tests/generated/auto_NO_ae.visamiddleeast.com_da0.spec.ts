import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_ae.visamiddleeast.com_da0', ['https://ae.visamiddleeast.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
