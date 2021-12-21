import generateCMPTests from "./runner";

generateCMPTests(
    ['https://www.mediamarkt.de/', 'https://www.bahn.de/'].map(site => [site, 'Tealium'])
);
