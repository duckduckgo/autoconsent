import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_vrbangers.com_wq0', ['https://vrbangers.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
