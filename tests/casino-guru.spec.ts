import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'casino-guru',
    [
        'https://casino.guru/',
        'https://www.kasinoguru-cz.com/',
        'https://oficialnekasina.sk/',
        'https://lotteryguru.com/',
        'https://loteria.guru/',
    ],
    {
        skipRegions: ['US'],
    },
);
