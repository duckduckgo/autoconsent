import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_report24.news_ngx', ['https://report24.news/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
