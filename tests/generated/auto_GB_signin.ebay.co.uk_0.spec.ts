import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_GB_signin.ebay.co.uk_0',
    [
        'https://signin.ebay.co.uk/ws/eBayISAPI.dll?SignIn&ru=https%3A%2F%2Fmy.ebay.co.uk%2F&sgfl=sm&smuid=488459d3-693d-11f0-bfa5-451a99170cba',
    ],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] },
);
