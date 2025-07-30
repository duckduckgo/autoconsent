import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_vrbangers.com_p8a', ['https://vrbangers.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
