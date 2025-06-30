import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_news.sky.com_z2l', ['https://news.sky.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
