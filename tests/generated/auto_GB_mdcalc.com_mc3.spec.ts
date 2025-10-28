import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_mdcalc.com_mc3', ['https://www.mdcalc.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
