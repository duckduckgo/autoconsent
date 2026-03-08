import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bo-resort.com_qei', ['https://bo-resort.com/fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
