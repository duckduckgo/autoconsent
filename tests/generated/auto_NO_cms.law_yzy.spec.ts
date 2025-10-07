import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_cms.law_yzy', ['https://cms.law/en/nor/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
