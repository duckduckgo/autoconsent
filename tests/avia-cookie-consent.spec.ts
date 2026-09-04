import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'avia-cookie-consent',
    [
        'https://wearesrna.org/',
        'https://ecma-international.org/',
        'https://www.tdisdi.com/',
        'https://skiloveland.com/',
        'https://hugos-pizza.de/',
        'https://artlantis.com/',
    ],
    {},
);
