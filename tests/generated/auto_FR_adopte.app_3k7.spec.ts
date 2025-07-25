import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_adopte.app_3k7', ['https://www.adopte.app/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
