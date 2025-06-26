import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_news.sky.com_eli', ['https://news.sky.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
