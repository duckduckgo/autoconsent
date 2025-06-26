import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_news.sky.com_qp3', ['https://news.sky.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
