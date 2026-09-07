import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'quantcast',
    [
        'https://secretnyc.co/nycfc-vs-ny-red-bulls-where-to-watch/',
        'https://polki.pl/',
        'https://elle.pl/',
        'https://www.thelocal.fr/',
        'https://www.pensieriparole.it/',
        'https://www.warhistoryonline.com/',
    ],
    {
        skipRegions: ['US', 'GB', 'FR'],
    },
);
