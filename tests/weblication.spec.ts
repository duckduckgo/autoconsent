import generateCMPTests from '../playwright/runner';

generateCMPTests('weblication', [
    'https://www.steffisburg.ch/',
    'https://www.frutigen.ch/',
    'https://www.guetersloh.de/',
    'https://www.luenen.de/',
    'https://www.bovard.ch/',
]);
