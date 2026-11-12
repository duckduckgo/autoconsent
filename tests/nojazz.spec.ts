import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'nojazz',
    ['https://www.biosagenda.nl/', 'https://www.rijmwoordenboek.nl/', 'https://patiencespel.net/', 'https://www.comefaretutto.com/'],
    {},
);
