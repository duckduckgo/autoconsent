import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_mathway.com_njo', ['https://www.mathway.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
