import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_hmv.com_3uf', ['https://hmv.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
