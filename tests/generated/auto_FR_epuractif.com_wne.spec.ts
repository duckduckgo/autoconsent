import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_epuractif.com_wne', ['https://epuractif.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
