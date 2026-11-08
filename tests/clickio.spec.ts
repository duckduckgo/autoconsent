import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'click.io',
    ['https://www.treccani.it/', 'https://www.dizy.com/', 'https://www.golfshake.com/', 'https://www.lasicilia.it/'],
    {
        skipRegions: ['US'],
    },
);
