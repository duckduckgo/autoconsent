import generateCMPTests from '../playwright/runner';

generateCMPTests('Klaro', [
    'https://heyklaro.com/',
    'https://www.zeitraum-moebel.de/',
    'https://repisalud.isciii.es/',
    'https://www.autoreparaturen.de/',
    'https://www.merton.gov.uk/',
    // 'https://dspace.library.stonybrook.edu', // polyfills Promise so playwright doesn't work
]);
