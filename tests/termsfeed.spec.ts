import generateCMPTests from '../playwright/runner';

generateCMPTests('termsfeed', [
    'https://ftbwiki.org/Feed_The_Beast_Wiki',
    'https://inspirationaladventures.com/',
    'http://www.campingplatz-suche.com/',
    // freeprivacypolicy.com white label: reject button variant
    'https://www.stockport.gov.uk/',
    'https://gwr3n.github.io/jsdp/',
    // freeprivacypolicy.com white label: preferences-only variant
    'https://grovemade.com/walnut-collection/',
]);
