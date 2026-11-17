import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'prestashop-advanced-cookie-banner',
    ['https://kluczesoft.pl/', 'https://buro-conseil.com/', 'https://reflecta.de/', 'https://bbois.com/', 'https://sosav.fr/'],
    {
        testSelfTest: false,
    },
);
