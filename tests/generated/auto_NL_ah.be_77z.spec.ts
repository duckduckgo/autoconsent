import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ah.be_77z', ['https://www.ah.be/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
