import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_guichet.public.lu_0qm', ['https://guichet.public.lu/fr/citoyens.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
