import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'close-cookie-notice-snippet',
    [
        'https://luogocomune.net/',
        'https://www.spytech-web.com/',
        'https://panelradiowy.pl/',
        'https://www.ski-outlet.be/webshop/',
        'https://www.hardysyearbooks.co.uk/',
    ],
    {},
);
