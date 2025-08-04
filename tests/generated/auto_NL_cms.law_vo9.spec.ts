import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_cms.law_vo9', ['https://cms.law/en/nld/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
