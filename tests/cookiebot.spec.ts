import generateCMPTests from "./runner";

generateCMPTests(
    [
        'https://www.kaufland.de/handys/',
        'https://www.zentrum-der-gesundheit.de/',
        'https://www.wohnen.de/',
        'https://www.history.de/',
    ].map(site => [site, 'Cybotcookiebot'])
);
