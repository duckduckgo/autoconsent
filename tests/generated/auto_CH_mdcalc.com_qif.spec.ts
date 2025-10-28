import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_mdcalc.com_qif', ['https://www.mdcalc.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
