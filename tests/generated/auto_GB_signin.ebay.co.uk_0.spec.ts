import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_GB_signin.ebay.co.uk_0',
    [
        'https://signin.ebay.co.uk/ws/eBayISAPI.dll?SignIn&ru=https%3A%2F%2Fmy.ebay.co.uk%2F&sgfl=sm&smuid=7f9f0c8d-72a7-11f0-b315-ff34f7fae3ae',
    ],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] },
);
