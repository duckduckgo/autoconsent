import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lannuaire.service-public.gouv.fr_9sw', ['https://lannuaire.service-public.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
