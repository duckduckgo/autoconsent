import generateCMPTests from '../playwright/runner';

generateCMPTests('orejime', [
    'https://www.afdas.com/',
    'https://www.ifrap.org/',
    'https://www.cre.fr/',
    'https://www.euroairport.com/',
    'https://www.gironde.fr/',
    'https://www.leforem.be/',
]);

// page reloads after the choice is saved, so the self-test cannot run
generateCMPTests('orejime', ['https://www.naval-group.com/'], { testSelfTest: false });
