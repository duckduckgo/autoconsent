import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'funding-choices',
    ['https://www.bbc.com/', 'https://www.accuweather.com/', 'https://hbr.org/', 'https://www.dinarguru.com/'],
    {
        skipRegions: ['US', 'GB'],
    },
);

// legitimate-interest-only notice has no consent button
generateCMPTests('funding-choices', ['https://schulferien.nrw/', 'https://www.feiertage.info/'], {
    onlyRegions: ['DE'],
    testOptIn: false,
});
generateCMPTests('funding-choices', ['https://www.knitting-bee.com/'], {
    onlyRegions: ['GB'],
    testOptIn: false,
});
