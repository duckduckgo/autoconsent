import generateCMPTests from '../playwright/runner';
generateCMPTests(
    'auto_GB_signin.ebay.co.uk_0',
    ['https://signin.ebay.co.uk/ws/eBayISAPI.dll?SignIn&ru=https%3A%2F%2Fmy.ebay.co.uk%2F&sgfl=sm&smuid=5dd614ba443b42679a133019ab896beb'],
    { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] },
);
