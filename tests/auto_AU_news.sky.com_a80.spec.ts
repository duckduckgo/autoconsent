import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_news.sky.com_a80', ['https://news.sky.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
