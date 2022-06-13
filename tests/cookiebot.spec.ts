import generateCMPTests from "../playwright/runner";

generateCMPTests('Cybotcookiebot', [
    'https://www.wohnen.de/',
    'https://www.zwilling.com/de/',
    'https://forums.cpanel.net/',
    'https://tfl.gov.uk',
    "https://www.ab-in-den-urlaub.de/",
    "https://www.centralpoint.nl/",
    "https://www.vatera.hu/",
    "https://www.smartsheet.com/",
], {
    skipRegions: ['US']
});
