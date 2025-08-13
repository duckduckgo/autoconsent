import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_confused.com_0', ['https://www.confused.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
