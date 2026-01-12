import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_mepal.com_9gw', ['https://www.mepal.com/nl'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
