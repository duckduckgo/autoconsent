import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_tcl.com_148', ['https://www.tcl.com/ch/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
