import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_newsweek.com_3cr', ['https://www.newsweek.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
