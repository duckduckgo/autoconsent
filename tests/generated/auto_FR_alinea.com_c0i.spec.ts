import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_alinea.com_c0i', ['https://www.alinea.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
