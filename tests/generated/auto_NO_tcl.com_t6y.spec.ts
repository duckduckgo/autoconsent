import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_tcl.com_t6y', ['https://www.tcl.com/no/nb'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
