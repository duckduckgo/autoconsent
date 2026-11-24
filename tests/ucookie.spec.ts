import generateCMPTests from '../playwright/runner';

generateCMPTests('ucookie', [
    'https://www.ikea.com.tr/',
    'https://www.colins.com.tr/',
    'https://www.ramsey.com.tr/',
    'https://www.cartersoshkosh.com.tr/',
    'https://www.iksv.org/',
]);
