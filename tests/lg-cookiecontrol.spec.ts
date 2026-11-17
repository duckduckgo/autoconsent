import generateCMPTests from '../playwright/runner';

generateCMPTests('lg-cookiecontrol', [
    'https://richtlijnen.nhg.org/',
    'https://www.henw.org/',
    'https://www.kunstmuseum.nl/nl',
    'https://iisg.amsterdam/nl',
    'https://www.amstelring.nl/',
    'https://www.universiteitenvannederland.nl/',
]);
