import generateCMPTests from '../playwright/runner';

generateCMPTests('termsfeed', [
    'https://ftbwiki.org/Feed_The_Beast_Wiki',
    'https://inspirationaladventures.com/',
    'http://www.campingplatz-suche.com/',
]);
