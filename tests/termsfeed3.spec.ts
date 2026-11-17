import generateCMPTests from '../playwright/runner';

generateCMPTests('termsfeed3', [
    'http://www.flugplan-flughafen.de/',
    'http://www.namenfinden.de/',
    'http://www.songtexte.de/',
    // variant with an extra "Accept Only Necessary Cookies" button
    'https://worldtabletennis.com/',
]);
