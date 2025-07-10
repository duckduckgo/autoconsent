import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_trove.scot_h8v', ['https://www.trove.scot/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
