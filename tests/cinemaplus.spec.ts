import generateCMPTests from '../playwright/runner';

generateCMPTests('cinemaplus', [
    'https://www.yourneighborhoodtheatre.com/',
    'https://www.brewvies.com/',
    'https://www.linwaycinema.com/',
    'https://www.cmxcinemas.com/',
]);
