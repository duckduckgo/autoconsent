import generateCMPTests from '../playwright/runner';
generateCMPTests(
    'auto_GB_signin.ebay.co.uk_0',
    ['https://signin.ebay.co.uk/ws/eBayISAPI.dll?SignIn&ru=https%3A%2F%2Fmy.ebay.co.uk%2F&sgfl=sm&smuid=3e27c1eb1a254bfa8235c4cf543a76a0'],
    { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] },
);
