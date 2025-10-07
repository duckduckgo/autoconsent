import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_entreprendre.service-public.gouv.fr_mle', ['https://entreprendre.service-public.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
