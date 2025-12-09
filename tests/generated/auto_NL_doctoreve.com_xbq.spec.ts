import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_doctoreve.com_xbq', ['https://doctoreve.com/nl'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
