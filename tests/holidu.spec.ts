import generateCMPTests from '../playwright/runner';

generateCMPTests('holidu', [
    'https://www.chambres-hotes.fr/',
    'https://www.holidu.co.uk/',
    'https://www.ferienwohnungen.de/',
    'https://www.gites.fr/',
    'https://www.clubrural.com/',
    'https://www.cybevasion.fr/',
]);
