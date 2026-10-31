import generateCMPTests from '../playwright/runner';

generateCMPTests('google-cookiechoices', [
    'https://www.oeffnungszeiten.com/',
    'https://www.hardware.fr/',
    'https://dotapicker.com/',
    'https://www.lingualia.com/',
    'https://real-debrid.com/',
    // dismiss link labelled as an accept button: hidden instead of clicked
    'https://www.engheben.it/',
]);
