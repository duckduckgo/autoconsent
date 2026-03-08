import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ca-nordest.com_ta3', ['https://ca-nordest.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
