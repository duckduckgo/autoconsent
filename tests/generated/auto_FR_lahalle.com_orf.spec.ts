import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lahalle.com_orf', ['https://www.lahalle.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
