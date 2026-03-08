import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bourrienne.com_kpw', ['https://bourrienne.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
