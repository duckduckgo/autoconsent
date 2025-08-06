import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_service-public.fr_qvp', ['https://www.service-public.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
