import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'comarch',
    ['https://www.comarch.pl/', 'https://www.comarch.com/', 'https://www.comarch.de/', 'https://kariera.comarch.pl/'],
    {},
);
