import generateCMPTests from '../playwright/runner';

generateCMPTests('cookieyes-legacy', [
    'https://www.cometafondo.it/',
    'https://www.playnet.it/',
    // classic bar layout with inline preferences
    'https://www.proteofaresapere.it/',
    // variants without a reject button, opt-out goes through the preferences
    'https://fozzy.com/',
    'https://kitecampione.it/',
]);
