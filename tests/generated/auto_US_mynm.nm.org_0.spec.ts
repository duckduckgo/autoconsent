import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_US_mynm.nm.org_0',
    ['https://mynm.nm.org/MyChart/Authentication/Login?utm_source=mychart.nm.org&utm_medium=301re&utm_campaign=mynm'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] },
);
