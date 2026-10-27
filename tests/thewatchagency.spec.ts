import generateCMPTests from '../playwright/runner';

generateCMPTests('thewatchagency', [
    'https://www.urverket.no/',
    'https://www.uret.se/',
    'https://www.urvaerket.dk/',
    'https://www.laatukellot.fi/',
    'https://www.thewatchagency.com/',
]);
