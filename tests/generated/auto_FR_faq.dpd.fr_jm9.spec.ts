import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_faq.dpd.fr_jm9', ['https://faq.dpd.fr/fr/faq-destinataire'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
