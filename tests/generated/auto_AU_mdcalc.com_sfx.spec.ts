import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_mdcalc.com_sfx', ['https://www.mdcalc.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
