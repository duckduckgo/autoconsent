import generateCMPTests from "./runner";

generateCMPTests('Cybotcookiebot', [
    'https://www.wohnen.de/',
    'https://www.zwilling.com/de/',
    'https://forums.cpanel.net/',
    'https://tfl.gov.uk'
], {
    skipRegions: ['US']
});
