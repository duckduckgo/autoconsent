import generateCMPTests from '../playwright/runner';

generateCMPTests('orejime', [
    'https://financien.belgium.be/fr/E-services/Tax-on-web',
    'https://www.carnavalet.paris.fr/',
    'https://www.cre.fr/',
    'https://www.euroairport.com/',
    'https://www.ifrap.org/',
    'https://www.mam.paris.fr/',
    'https://www.petitpalais.paris.fr/',
    'https://necto.info/',
    // forced consent modal instead of a banner
    'https://octo.com/',
    'https://www.mfr.bzh/',
]);

// the site reloads after a consent choice, so the self-test cannot run
generateCMPTests('orejime', ['https://www.naval-group.com/'], {
    testSelfTest: false,
});
