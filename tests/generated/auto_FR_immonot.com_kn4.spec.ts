import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_immonot.com_kn4', ['https://www.immonot.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
