import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_acteurs.epudf.org_kiq', ['https://acteurs.epudf.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
