import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_123led.nl_vdu', ['https://www.123led.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
