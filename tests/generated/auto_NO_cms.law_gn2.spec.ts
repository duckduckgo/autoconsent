import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_cms.law_gn2', ['https://cms.law/en/nor/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
