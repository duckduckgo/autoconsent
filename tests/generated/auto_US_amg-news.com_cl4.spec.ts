import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_amg-news.com_cl4', ['https://amg-news.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
