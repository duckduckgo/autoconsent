import generateCMPTests from '../playwright/runner';

generateCMPTests('orejime', [
    // 'https://www.bienvenue-a-la-ferme.com/', // the site initialises Orejime only on some page loads
    'https://www.debatpublic.fr/',
    'https://www.museedesconfluences.fr/',
    'https://www.gironde.fr/',
    'https://metropole.rennes.fr/',
    'https://www.ecologie.gouv.fr/',
    'https://www.mer.gouv.fr/',
    'https://www.octo.com/',
    'https://www.afdas.com/',
    'https://www.ifrap.org/',
    'https://www.cre.fr/',
    'https://www.euroairport.com/',
    'https://www.leforem.be/',
]);

// page reloads after the choice is saved, so the self-test cannot run
generateCMPTests('orejime', ['https://www.naval-group.com/'], { testSelfTest: false });
