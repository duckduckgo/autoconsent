import generateCMPTests from '../playwright/runner';

generateCMPTests('florisvanbommel', [
    'https://nl.florisvanbommel.com/',
    'https://de.florisvanbommel.com/',
    'https://be.florisvanbommel.com/',
    'https://www.florisvanbommel.com/',
]);
