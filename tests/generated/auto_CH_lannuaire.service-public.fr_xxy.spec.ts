import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_lannuaire.service-public.fr_xxy', ['https://lannuaire.service-public.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
