import generateCMPTests from '../playwright/runner';

generateCMPTests('termsfeed', [
    'https://portforward.com/',
    'https://inspirationaladventures.com/',
    'http://www.campingplatz-suche.com/',
    // freeprivacypolicy.com variant
    'https://grovemade.com/',
    'https://loot.farm/',
    'https://tcdecks.net/',
    // privacypolicies.com variant
    'https://www.instantprint.co.uk/',
    'https://www.route1print.co.uk/',
    'https://www.spreadthesign.com/',
    'https://worldarchitecture.org/',
    // iwt.com.tr variant
    'https://dirmakmakina.com/',
]);
