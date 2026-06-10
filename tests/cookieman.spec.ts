import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'cookieman',
    ['https://www.foodwatch.org/en/foodwatch-international', 'https://www.ifd-allensbach.de/', 'https://www.wu.ac.at/'],
    {
        skipRegions: ['US'],
    },
);
