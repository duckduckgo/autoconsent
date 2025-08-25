import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_hmv.com_nt4', ['https://hmv.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
