import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'urvaerket',
    [
        'https://www.urvaerket.dk/',
        'https://www.uret.se/',
        'https://www.urverket.no/',
        'https://www.laatukellot.fi/',
        'https://www.thewatchagency.com/',
    ],
    {},
);
