import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_avarda.com_46u', ['https://avarda.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
