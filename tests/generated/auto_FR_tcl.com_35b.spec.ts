import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_tcl.com_35b', ['https://www.tcl.com/fr/fr'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
