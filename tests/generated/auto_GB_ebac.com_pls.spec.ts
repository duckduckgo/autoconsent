import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ebac.com_pls', ['https://ebac.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
