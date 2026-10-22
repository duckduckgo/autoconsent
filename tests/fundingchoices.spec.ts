import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'funding-choices',
    ['https://www.bbc.com/', 'https://www.accuweather.com/', 'https://hbr.org/', 'https://www.dinarguru.com/'],
    {
        skipRegions: ['US', 'GB'],
    },
);

// Also loads Cookiebot, which never shows its own dialog there
generateCMPTests('funding-choices', ['https://polszczyzna.pl/'], {
    onlyRegions: ['GB', 'FR', 'NL', 'PL'],
});
