import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'cookieinfo',
    ['https://www.uketropolis.com/', 'https://www.unb.ca/', 'https://gengo.com/', 'http://aarth.net/', 'https://lookcolor.ru/'],
    {
        testOptIn: false,
    },
);
