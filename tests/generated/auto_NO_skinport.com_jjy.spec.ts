import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_skinport.com_jjy', ['https://skinport.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
