import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_meillandrichardier.com_fxw', ['https://www.meillandrichardier.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
