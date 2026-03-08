import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_cns.public.lu_6p6', ['https://cns.public.lu/fr/assure.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
