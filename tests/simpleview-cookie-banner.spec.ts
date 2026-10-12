import generateCMPTests from '../playwright/runner';

generateCMPTests('simpleview-cookie-banner', [
    'https://www.poconomountains.com/listing/the-frogtown-chophouse/4896/',
    'https://www.visitmadison.com/',
    'https://www.gotocatalina.com/',
    'https://www.experiencescottsdale.com/',
    'https://www.visittampabay.com/',
    'https://www.visitraleigh.com/',
]);
