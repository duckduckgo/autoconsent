import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'funding-choices',
    [
        'https://www.bbc.com/',
        'https://www.accuweather.com/',
        'https://hbr.org/',
        'https://www.dinarguru.com/',
        'http://biketrailspfannenstiel.ch/',
    ],
    {
        skipRegions: ['US', 'GB'],
    },
);
