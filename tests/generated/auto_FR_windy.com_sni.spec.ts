import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_windy.com_sni', ['https://www.windy.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
