import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'egotec-cookie-bar',
    ['https://www.uniklinikum-jena.de/', 'https://www.mitteldeutsches-krebszentrum.de/', 'https://kausalewelt.de/'],
    {},
);
