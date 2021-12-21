import generateCMPTests from "./runner";

generateCMPTests(
    [
        'https://www.yubico.com/',
        'https://nytcrosswordanswers.org/',
    ].map(site => [site, 'cookie-law-info'])
);
