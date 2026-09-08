import generateCMPTests from '../playwright/runner';

generateCMPTests('autodoc', [
    'https://www.autodoc.co.uk/',
    'https://www.autodoc.de/',
    'https://www.autodoc.es/',
    'https://www.autodoc.pl/',
]);
