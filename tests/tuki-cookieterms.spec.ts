import generateCMPTests from '../playwright/runner';

generateCMPTests('tuki-cookieterms', [
    'https://filharmonia.pl/',
    'https://filharmoniagorzowska.pl/',
    'https://sinfoniaiuventus.pl/',
    'https://bok.waw.pl/',
]);
