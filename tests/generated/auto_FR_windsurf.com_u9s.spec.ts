import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_windsurf.com_u9s', ['https://windsurf.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
