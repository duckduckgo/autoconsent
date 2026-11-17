import generateCMPTests from '../playwright/runner';

generateCMPTests('squarespace-cookie-notice', [
    'https://www.carraghersnyc.com/',
    'https://www.chelseamarket.com/',
    'https://www.tested.com/',
    'https://www.pronuncian.com/',
    'https://www.americanalpineclub.org/',
]);
