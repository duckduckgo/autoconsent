import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'squarespace-cookie-banner',
    [
        'https://insidethesquare.co/',
        'https://www.urallawoolroom.com.au/',
        'https://www.davidbowie.com/',
        'https://www.thecorneroffice.uk/',
        'https://www.theawkwardyeti.com/',
        'https://www.radiotopia.fm/',
    ],
    {
        skipRegions: ['US'],
    },
);
