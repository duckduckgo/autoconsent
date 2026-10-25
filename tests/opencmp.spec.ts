import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'opencmp',
    ['https://www.shooter-bubble.de/', 'https://www.presseportal.de/', 'https://www.freitag.de/', 'https://www.brutto-netto-rechner.info/'],
    {
        skipRegions: ['US'],
    },
);
