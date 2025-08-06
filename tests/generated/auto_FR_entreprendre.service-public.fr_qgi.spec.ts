import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_entreprendre.service-public.fr_qgi', ['https://entreprendre.service-public.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
