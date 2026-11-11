import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'funding-choices',
    [
        'https://www.method.gg/',
        'http://www.hautarzt-vergleich.de/',
        'https://hbr.org/',
        'https://www.dinarguru.com/',
        'http://biketrailspfannenstiel.ch/',
        'https://www.lyrics.com/',
    ],
    {
        skipRegions: ['US', 'GB'],
    },
);
