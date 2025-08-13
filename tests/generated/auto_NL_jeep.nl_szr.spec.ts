import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_jeep.nl_szr', ['https://www.jeep.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
