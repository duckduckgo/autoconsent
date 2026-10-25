import generateCMPTests from '../playwright/runner';

generateCMPTests('funding-choices', ['https://hbr.org/', 'https://www.dinarguru.com/', 'https://freizeitmonster.de/'], {
    skipRegions: ['US', 'GB'],
});

// Legitimate-interest-only notice in a floating bubble, without consent CTAs
generateCMPTests(
    'funding-choices',
    ['https://ukdefencejournal.org.uk/', 'https://schulferien.nrw/', 'https://www.ukbmd.org.uk/', 'https://www.knitting-bee.com/'],
    {
        testOptIn: false,
        onlyRegions: ['DE', 'GB', 'FR', 'NL'],
    },
);
