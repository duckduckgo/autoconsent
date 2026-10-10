import generateCMPTests from '../playwright/runner';

generateCMPTests('termsfeed', [
    'https://portforward.com/',
    'https://setuprouter.com/',
    'https://inspirationaladventures.com/',
    'http://www.campingplatz-suche.com/',
    // white-labelled as freeprivacypolicy.com
    'https://www.vintageandrare.com/',
    'https://tcdecks.net/',
    'https://www.geolsoc.org.uk/',
]);
