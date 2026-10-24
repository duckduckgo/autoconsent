import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'funding-choices',
    [
        'https://www.kitco.com/',
        'https://www.techonthenet.com/',
        'https://hbr.org/',
        'https://www.dinarguru.com/',
        // legitimate-interest-only notice
        'https://www.gktoday.in/',
        'https://www.musica.com/',
    ],
    {
        skipRegions: ['US', 'GB'],
    },
);
