import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_alinea.com_d9k', ['https://www.alinea.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
