import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_affectation3e.phm.education.gouv.fr_up0', ['https://affectation3e.phm.education.gouv.fr/pna-public/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
