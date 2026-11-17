import generateCMPTests from '../playwright/runner';

generateCMPTests('zoomalia', [
    'https://www.zoomalia.com/',
    'https://www.zoomalia.es/',
    'https://www.zoomalia.de/',
    'https://www.zoomalia.it/',
]);
