import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'storeden',
    ['https://www.cacciaepescabonannini.it/', 'https://www.babysanity.it/', 'https://www.supersamastore.it/', 'https://www.ariete.com/'],
    {
        // the banner is not rendered when navigator.webdriver is true
        hideWebdriver: true,
    },
);
