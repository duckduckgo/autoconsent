import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bebe9.com_53d', ['https://www.bebe9.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
