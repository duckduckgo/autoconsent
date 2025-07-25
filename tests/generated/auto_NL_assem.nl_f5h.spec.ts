import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_assem.nl_f5h', ['https://www.assem.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
