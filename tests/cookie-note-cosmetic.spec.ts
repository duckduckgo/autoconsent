import generateCMPTests from '../playwright/runner';

generateCMPTests('cookie-note-cosmetic', [
    'https://stihi.ru/',
    'https://proza.ru/',
    'https://www.f1news.ru/',
    'https://megatyumen.ru/',
    'https://allgaz.ru/',
]);
