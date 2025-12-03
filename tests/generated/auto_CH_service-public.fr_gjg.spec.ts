import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_service-public.fr_gjg', ['https://www.service-public.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
