import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'aviva-cookie-bar',
    ['https://www.dhbbank.de/', 'https://www.nevi.nl/', 'https://www.apsitdiensten.nl/', 'https://www.avivasolutions.nl/'],
    {},
);
