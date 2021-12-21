import generateCMPTests from "./runner";

generateCMPTests(
    [
        'https://yrc.com/',
        'https://www.worldometers.info/'
    ].map(site => [site, 'cookieconsent'])
);
