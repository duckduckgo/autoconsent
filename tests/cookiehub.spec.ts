import generateCMPTests from '../playwright/runner';

generateCMPTests('cookiehub', [
    'https://shorthand.com/',
    'https://www.semrush.com/',
    'https://www.nonstopdogwear.com/en/',
    'https://searchengineland.com/',
]);
