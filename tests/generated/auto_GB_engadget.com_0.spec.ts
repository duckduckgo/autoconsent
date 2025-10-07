import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_engadget.com_0', ['https://www.engadget.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
