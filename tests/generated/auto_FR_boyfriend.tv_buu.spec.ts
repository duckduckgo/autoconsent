import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_boyfriend.tv_buu', ['https://www.boyfriend.tv/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
