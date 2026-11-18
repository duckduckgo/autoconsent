import generateCMPTests from '../playwright/runner';

// Gleam only shows its consent banner to visitors from Turkey
generateCMPTests(
    'gleam',
    ['https://www.haberturk.com/', 'https://www.bloomberght.com/', 'https://www.showtv.com.tr/', 'https://www.showturk.com.tr/'],
    {
        onlyRegions: ['TR'],
    },
);
