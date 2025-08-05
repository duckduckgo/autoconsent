import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_racket.news_sxp', ['https://www.racket.news/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
