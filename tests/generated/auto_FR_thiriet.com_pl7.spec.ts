import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_thiriet.com_pl7', ['https://www.thiriet.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
