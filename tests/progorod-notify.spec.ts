import generateCMPTests from '../playwright/runner';

generateCMPTests('progorod-notify', [
    'https://progoroduhta.ru/',
    'https://progorod43.ru/',
    'https://progorodnn.ru/',
    'https://progorod76.ru/',
]);
