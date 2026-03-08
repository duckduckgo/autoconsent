import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ch-blois.com_te7', ['https://ch-blois.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
