import generateCMPTests from '../playwright/runner';

generateCMPTests('cookies-info', [
    'https://m.alza.cz/',
    'https://www.alza.cz/',
    'https://www.alza.sk/',
    'https://www.alza.hu/',
    'https://www.peddy.cz/',
    'https://www.narex.cz/',
    'https://www.makita-eshop.cz/',
]);
