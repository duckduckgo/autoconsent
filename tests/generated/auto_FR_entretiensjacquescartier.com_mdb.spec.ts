import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_entretiensjacquescartier.com_mdb', ['https://entretiensjacquescartier.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
