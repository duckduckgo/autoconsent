import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_tcl.com_qr5', ['https://www.tcl.com/fr/fr'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
