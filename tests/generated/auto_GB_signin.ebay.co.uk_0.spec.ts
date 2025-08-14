import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_GB_signin.ebay.co.uk_0',
    [
        'https://signin.ebay.co.uk/ws/eBayISAPI.dll?SignIn&ru=https%3A%2F%2Fmy.ebay.co.uk%2F&sgfl=sm&smuid=9d6d8af5-77d0-11f0-a5d4-4d57901fac5d',
    ],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] },
);
