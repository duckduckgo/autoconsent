import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_rmcsport.tv_1lt', ['https://www.rmcsport.tv/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
