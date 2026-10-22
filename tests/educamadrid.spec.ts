import generateCMPTests from '../playwright/runner';

generateCMPTests('educamadrid', [
    'https://www.educa2.madrid.org/',
    'https://mediateca.educa.madrid.org/',
    'https://formacion.educa.madrid.org/',
]);
