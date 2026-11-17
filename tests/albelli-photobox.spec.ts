import generateCMPTests from '../playwright/runner';

generateCMPTests('albelli-photobox', [
    'https://www.albelli.nl/',
    'https://www.posterxxl.de/',
    'https://www.photobox.co.uk/',
    'https://www.hofmann.es/',
]);
