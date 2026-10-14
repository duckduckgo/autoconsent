import generateCMPTests from '../playwright/runner';

generateCMPTests('meteored', [
    'https://www.tempo.pt/',
    'https://www.tiempo.com/',
    'https://www.ilmeteo.net/',
    'https://www.daswetter.com/',
    'https://www.yourweather.co.uk/',
]);
