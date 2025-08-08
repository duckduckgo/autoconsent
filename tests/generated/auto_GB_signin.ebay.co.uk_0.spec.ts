import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_GB_signin.ebay.co.uk_0',
    [
        'https://signin.ebay.co.uk/ws/eBayISAPI.dll?SignIn&ru=https%3A%2F%2Fmy.ebay.co.uk%2F&sgfl=sm&smuid=8224f427-6d26-11f0-b153-2b5468523676',
        'https://www.ebay.co.uk/',
        'https://www.ebay.com/',
        'https://www.ebay.nl/',
    ],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] },
);
