import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_kiaoval.com_0', ['https://www.kiaoval.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
