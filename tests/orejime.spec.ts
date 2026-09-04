import generateCMPTests from '../playwright/runner';

generateCMPTests('orejime', [
    'https://www.euroairport.com/',
    'https://www.ifrap.org/',
    'https://www.cre.fr/',
    'https://www.carnavalet.paris.fr/',
]);

// Serves a captcha wall instead of the site to datacenter IPs outside the EU.
generateCMPTests('orejime', ['https://financien.belgium.be/fr/E-services/Tax-on-web'], {
    onlyRegions: ['FR', 'DE'],
});

// Orejime v3 markup (orejime-Banner instead of orejime-Notice).
// The site reloads itself once consent is saved, which wipes the engine state the self test needs.
generateCMPTests('orejime', ['https://www.naval-group.com/'], {
    testSelfTest: false,
});
