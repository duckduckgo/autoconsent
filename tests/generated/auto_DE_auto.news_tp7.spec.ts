import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_auto.news_tp7', ['https://auto.news/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
