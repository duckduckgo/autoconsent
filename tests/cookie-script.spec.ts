import generateCMPTests from '../playwright/runner';

generateCMPTests('cookie-script', [
    // reject button in the banner
    'https://www.bes.co.uk/',
    // no reject button: "Save & Close" in the preferences panel
    'https://www.fairlawns.co.uk/',
    'https://www.aktionspreis.de/',
    'https://ikalender.org/',
]);
