import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ca-els.com_gio', ['https://www.ca-els.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
