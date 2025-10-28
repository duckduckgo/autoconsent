import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dasimport.nl_zgi', ['https://www.dasimport.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
