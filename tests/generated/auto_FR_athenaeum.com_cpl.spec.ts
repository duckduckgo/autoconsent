import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_athenaeum.com_cpl', ['https://athenaeum.com/fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
