import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'cookieguard',
    ['https://www.godsonandcoles.co.uk/', 'https://www.davidaaron.com/', 'https://www.sjphillips.com/', 'https://www.woll-haus.de/'],
    {},
);
