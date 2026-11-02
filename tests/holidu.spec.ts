import generateCMPTests from '../playwright/runner';

generateCMPTests('holidu', [
    'https://www.gites.fr/',
    'https://www.holidu.co.uk/',
    'https://www.ferienwohnungen.de/',
    'https://www.vakantiehuisje.nl/',
]);
