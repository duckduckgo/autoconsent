import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_dmarket.com_uxj', ['https://dmarket.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
