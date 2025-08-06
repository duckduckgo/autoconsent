import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nl.pepper.com_33w', ['https://nl.pepper.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
