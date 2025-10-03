import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_tcl.com_erj', ['https://www.tcl.com/uk/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
