import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_moneyradar.org_hgh', ['https://moneyradar.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
