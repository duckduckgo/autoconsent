import generateCMPTests from '../playwright/runner';

generateCMPTests('aliasdmc', [
    'https://outils-javascript.aliasdmc.fr/',
    'https://outils-css.aliasdmc.fr/',
    'https://media-queries.aliasdmc.fr/',
    'https://codes-pays-iso3166.aliasdmc.fr/',
    'https://web-color.aliasdmc.fr/',
    'https://votre-navigateur.aliasdmc.fr/',
]);
