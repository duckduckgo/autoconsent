import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'Uniconsent',
    [
        // popup in a shadow root on #uniccmp
        'https://www.autoforum.cz/',
        'https://synonymer.se/',
        'https://www.searchenginejournal.com/',
        'https://www.footballtransfers.com/',
        // older markup without the shadow root
        'https://www.offen.net/',
    ],
    {
        skipRegions: ['US'],
    },
);

// US (CCPA) flavor with an "Opt out personal data" button
generateCMPTests('Uniconsent', ['https://www.officialcharts.com/', 'https://www.tds.net/', 'https://tvarticles.org/'], {
    onlyRegions: ['US'],
});
