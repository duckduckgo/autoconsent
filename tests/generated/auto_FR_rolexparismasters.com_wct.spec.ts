import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_rolexparismasters.com_wct', ['https://www.rolexparismasters.com/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
