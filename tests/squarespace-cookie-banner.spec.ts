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

// accept-only notice variant, handled cosmetically
generateCMPTests('squarespace-cookie-banner', ['https://www.blueprincegame.com/', 'https://www.treelinereview.com/']);
