import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ccss.public.lu_0kv', ['https://ccss.public.lu/fr.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
