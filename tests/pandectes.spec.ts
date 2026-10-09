import generateCMPTests from '../playwright/runner';

generateCMPTests('pandectes', [
    'https://hollandscountryclothing.co.uk/',
    'https://cluse.com/',
    'https://swedishstockings.com/', // full-page overlay ("blocking") banner variant
]);

// shadow DOM <pandectes-cmp> banner variant
generateCMPTests(
    'pandectes',
    [
        'https://enron.com/',
        'https://www.parent.com/',
        'https://wetnwildbeauty.com/',
        'https://www.yakima.com/',
        'https://us.select-sport.com/collections/soccer-balls-training-series',
    ],
    {
        testOptIn: false,
    },
);

// shadow DOM variant without a decline button: opt out through preferences
generateCMPTests('pandectes', ['https://asmc.de/', 'https://crossrope.com/'], {
    testOptIn: false,
});
