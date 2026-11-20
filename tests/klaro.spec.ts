import generateCMPTests from '../playwright/runner';

generateCMPTests('Klaro', [
    'https://heyklaro.com/',
    'https://www.zeitraum-moebel.de/',
    'https://repisalud.isciii.es/',
    'https://www.barbican.org.uk/',
    'https://ucanr.edu/',
    // 'https://dspace.library.stonybrook.edu', // polyfills Promise so playwright doesn't work
]);

// custom-styled Klaro build without an accept button
generateCMPTests('Klaro', ['https://www.gianteagle.com/'], { testOptIn: false });
