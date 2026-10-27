import generateCMPTests from '../playwright/runner';

generateCMPTests('Klaro', [
    'https://heyklaro.com/',
    'https://www.caritas.de/',
    'https://forum.iobroker.net/',
    'https://www.merton.gov.uk/',
    'https://www.barbican.org.uk/',
    'https://sede.registradores.org/',
    // 'https://dspace.library.stonybrook.edu', // polyfills Promise so playwright doesn't work
]);
