import generateCMPTests from '../playwright/runner';

generateCMPTests('simpleview-cookie-banner', [
    'https://www.poconomountains.com/event/poconos-punk-rock-flea-market/27622/',
    'https://www.visitmadison.com/',
    'https://www.visittampabay.com/',
]);
