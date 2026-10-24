import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'refurbed',
    ['https://www.refurbed.dk/', 'https://www.refurbed.de/', 'https://www.refurbed.fr/', 'https://www.refurbed.co.uk/'],
    {},
);
