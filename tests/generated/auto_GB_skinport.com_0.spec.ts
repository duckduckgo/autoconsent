import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_skinport.com_0', ['https://skinport.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
