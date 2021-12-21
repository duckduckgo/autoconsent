import generateCMPTests from "./runner";

generateCMPTests(
    [
        'https://www.weathertech.com/'
    ].map(site => [site, 'osano'])
);
