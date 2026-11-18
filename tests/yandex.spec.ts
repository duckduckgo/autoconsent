import generateCMPTests from '../playwright/runner';

generateCMPTests('yandex', [
    'https://translate.yandex.com/',
    'https://translate.yandex.ru/',
    'https://ya.ru/',
    'https://yandex.by/',
    'https://market.yandex.ru/',
    'https://360.yandex.ru/',
    'https://music.yandex.ru/',
    'https://www.kinopoisk.ru/',
    'https://hd.kinopoisk.ru/',
]);
