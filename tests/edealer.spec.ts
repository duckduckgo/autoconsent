import generateCMPTests from '../playwright/runner';

// eDealer sites geo-block visitors outside North America
generateCMPTests(
    'edealer',
    [
        'https://www.subaruhamilton.com/subaru-national-offers/',
        'https://www.subaruofniagara.ca/',
        'https://www.rhsubaru.com/',
        'https://www.owensoundsubaru.com/',
        'https://www.stratfordsubaru.com/',
    ],
    {
        onlyRegions: ['US', 'CA'],
    },
);
