import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_vrbangers.com_h8z', ['https://vrbangers.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
