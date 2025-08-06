import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_adopte.app_d4e', ['https://www.adopte.app/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
