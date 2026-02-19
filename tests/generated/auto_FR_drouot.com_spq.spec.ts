import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_drouot.com_spq', ['https://drouot.com/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
