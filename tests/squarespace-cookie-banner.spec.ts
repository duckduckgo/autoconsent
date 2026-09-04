import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'squarespace-cookie-banner',
    ['https://www.davidbowie.com/', 'https://insidethesquare.co/', 'https://www.urallawoolroom.com.au/'],
    {
        skipRegions: ['US'],
    },
);
