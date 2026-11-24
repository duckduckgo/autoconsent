import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'wordpress-wordads',
    ['https://aniakubica.com/', 'https://katyscode.wordpress.com/', 'https://fantadys.com/', 'https://autocadtips1.com/'],
    {
        skipRegions: ['US'],
    },
);
