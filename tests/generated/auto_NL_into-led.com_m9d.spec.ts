import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_into-led.com_m9d', ['https://www.into-led.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
