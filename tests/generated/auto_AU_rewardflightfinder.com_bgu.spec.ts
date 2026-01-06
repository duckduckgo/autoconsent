import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_AU_rewardflightfinder.com_bgu',
    ['https://rewardflightfinder.com/news-and-advice/british-airways-economy-vs-premium-economy-a-side-by-side-look-at-what-you-get'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] },
);
