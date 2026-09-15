import generateCMPTests from '../playwright/runner';

generateCMPTests('europa-eu', [
    'https://ec.europa.eu/info/index_en',
    'https://european-union.europa.eu/index_en',
    'https://ec.europa.eu/commission/presscorner/detail/en/ip_26_202',
    'https://eur-lex.europa.eu/homepage.html',
    'https://agriculture.ec.europa.eu/index_en',
]);
