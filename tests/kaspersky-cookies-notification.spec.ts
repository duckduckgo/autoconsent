import generateCMPTests from '../playwright/runner';

generateCMPTests('kaspersky-cookies-notification', [
    'https://www.kaspersky.com/blog/kaspersky-esim-store/53634/',
    'https://usa.kaspersky.com/blog/',
    'https://threatpost.com/',
    'https://securelist.ru/',
]);
