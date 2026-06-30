import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'hbomax',
    [
        'https://www.hbomax.com/shows/us-against-the-world-four-years-with-the-mens-national-soccer-team/b38fe8cf-5908-43b1-9655-71f67ddf3eac',
    ],
    {
        onlyRegions: ['US'],
        mobile: true,
        testOptIn: false,
        testSelfTest: false,
    },
);
