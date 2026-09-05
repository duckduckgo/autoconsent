import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'pm-advancedcookiebanner',
    [
        'https://fleurdeluxe.co.uk/761-market-deeping-flower-delivery',
        'https://www.bbois.com/',
        'https://www.thermos-cz.cz/',
        'https://www.laboutiqueduhauttalon.fr/',
        'https://www.lecarredesvins.com/',
    ],
    // several themes reload the page when consent is saved, so the self test cannot report back
    { testSelfTest: false },
);
