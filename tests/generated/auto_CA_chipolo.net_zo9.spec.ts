import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_CA_chipolo.net_zo9',
    [
        'https://chipolo.net/en-us/products/chipolo-pop?ranMID=48087&amp;ranEAID=TnL5HPStwNw&amp;ranSiteID=TnL5HPStwNw-rLWNLhZcxNBX8UjwSl5rVw&amp;utm_source=rakuten&amp;utm_medium=affiliate&amp;utm_campaign=Skimlinks.com&amp;ranMID=48087&amp;ranEAID=TnL5HPStwNw&amp;ranSiteID=TnL5HPStwNw-kXCbcWrYRTptdarBpxMk2Q',
    ],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] },
);
