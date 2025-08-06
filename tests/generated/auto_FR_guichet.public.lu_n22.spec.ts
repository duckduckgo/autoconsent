import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_guichet.public.lu_n22', ['https://guichet.public.lu/fr/citoyens.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
