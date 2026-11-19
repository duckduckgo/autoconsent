import generateCMPTests from '../playwright/runner';

generateCMPTests('alza-cookies-info', ['https://m.alza.sk/', 'https://m.alza.cz/'], { mobile: true });
generateCMPTests('alza-cookies-info', [
    'https://www.alza.sk/',
    'https://www.alza.cz/',
    'https://www.alza.de/',
    'https://www.peddy.cz/',
    'https://www.narex.cz/',
]);
