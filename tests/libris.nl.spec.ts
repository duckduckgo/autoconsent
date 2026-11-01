import generateCMPTests from '../playwright/runner';

generateCMPTests('libris.nl', [
    'https://libris.nl/',
    'https://www.vanderveldeboeken.nl/',
    'https://www.boekhandelbroekhuis.nl/',
    'https://www.venstra.nl/',
    'https://athenaeumscheltema.nl/',
    'https://www.heinen.nl/',
]);
