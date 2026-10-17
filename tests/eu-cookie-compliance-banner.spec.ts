import generateCMPTests from '../playwright/runner';

generateCMPTests('eu-cookie-compliance-banner', [
    'https://bibliotheek.be/',
    'https://www.lunduniversity.lu.se/',
    'https://www.jeroenboschziekenhuis.nl/',
    'https://www.monparcourshandicap.gouv.fr/',
    'https://www.thuisarts.nl/',
    'https://uwaterloo.ca/',
]);
