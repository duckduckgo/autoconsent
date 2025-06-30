import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_news.sky.com_qj4', ['https://news.sky.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
