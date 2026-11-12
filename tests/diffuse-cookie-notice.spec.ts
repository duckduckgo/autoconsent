import generateCMPTests from '../playwright/runner';

generateCMPTests('diffuse-cookie-notice', [
    'https://www.christenenvoorisrael.nl/',
    'https://diffuse.tools/',
    'https://www.diffuse.nl/',
    'https://docs.diffuse.tools/',
]);
