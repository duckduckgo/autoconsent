import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_sport050.nl_hcy', ['https://sport050.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
