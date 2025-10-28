import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_mdcalc.com_i22', ['https://www.mdcalc.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
