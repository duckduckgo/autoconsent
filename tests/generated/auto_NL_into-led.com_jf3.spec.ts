import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_into-led.com_jf3', ['https://www.into-led.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
