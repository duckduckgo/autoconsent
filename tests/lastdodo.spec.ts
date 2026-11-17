import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'lastdodo',
    ['https://www.lastdodo.nl/', 'https://www.lastdodo.com/', 'https://www.lastdodo.de/', 'https://www.lastdodo.fr/'],
    {
        testSelfTest: false,
    },
);
