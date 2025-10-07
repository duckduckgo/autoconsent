import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_tcl.com_6o8', ['https://www.tcl.com/uk/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
