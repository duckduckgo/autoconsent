import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_hmv.com_5kq', ['https://hmv.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
