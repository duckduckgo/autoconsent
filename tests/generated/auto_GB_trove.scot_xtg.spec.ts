import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_trove.scot_xtg', ['https://www.trove.scot/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
