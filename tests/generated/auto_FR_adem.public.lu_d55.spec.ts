import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_adem.public.lu_d55', ['https://adem.public.lu/fr.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
