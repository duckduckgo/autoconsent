import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lannuaire.service-public.gouv.fr_6um', ['https://lannuaire.service-public.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
