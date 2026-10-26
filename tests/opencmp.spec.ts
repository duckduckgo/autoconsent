import generateCMPTests from '../playwright/runner';

// Settings-only flavor: reject via "Settings or reject" layer
generateCMPTests(
    'opencmp',
    [
        'https://www.brutto-netto-rechner.info/',
        'https://www.englisch-hilfen.de/',
        'https://www.wot-life.com/',
        'https://www.gea.de/',
        'https://www.shooter-bubble.de/',
        'https://www.freitag.de/',
    ],
    {
        skipRegions: ['US'],
    },
);

// Flavor with a "Reject all" button on the first layer
generateCMPTests('opencmp', ['https://www.presseportal.de/', 'https://www.biallo.de/'], {
    skipRegions: ['US'],
});
