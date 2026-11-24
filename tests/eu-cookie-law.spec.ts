import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'EU Cookie Law',
    ['https://cryptocurrencyfacts.com/', 'https://www.sharkthemes.com/', 'https://www.umrechnung-zoll-cm.de/'],
    {},
);
