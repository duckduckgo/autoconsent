import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_allrugby.com_bxa', ['https://www.allrugby.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
