import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_cms.law_34n', ['https://cms.law/en/nld/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
