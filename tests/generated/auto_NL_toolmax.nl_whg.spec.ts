import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_toolmax.nl_whg', ['https://www.toolmax.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
