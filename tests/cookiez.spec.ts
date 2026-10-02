import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'cookiez',
    ['https://mandys.ca/en/locations/old-port/', 'https://parama.ca/', 'https://www.e7n.de/', 'https://www.prismmarketing.com/'],
    {},
);
