import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_service-public.gouv.fr_ukm', ['https://www.service-public.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
