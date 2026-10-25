import generateCMPTests from '../playwright/runner';

generateCMPTests('cookie-script', [
    // reject button in the banner
    'https://www.bes.co.uk/',
    // no reject button: "Save & Close" in the preferences panel
    'https://www.fairlawns.co.uk/',
    'https://www.aktionspreis.de/',
    'https://ikalender.org/',
    // new banner layout without #cookiescript_injected
    'https://mitsdu.dk/',
    'https://n8n.io/',
    'https://hearthis.at/',
]);
