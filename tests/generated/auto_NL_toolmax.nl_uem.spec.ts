import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_toolmax.nl_uem', ['https://www.toolmax.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
