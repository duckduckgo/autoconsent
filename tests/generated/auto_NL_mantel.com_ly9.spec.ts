import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_mantel.com_ly9', ['https://www.mantel.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
