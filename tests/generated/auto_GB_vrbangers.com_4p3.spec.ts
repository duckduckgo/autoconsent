import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_vrbangers.com_4p3', ['https://vrbangers.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
