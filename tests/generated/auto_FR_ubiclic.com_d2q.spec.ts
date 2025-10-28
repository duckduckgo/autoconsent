import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ubiclic.com_d2q', ['https://www.ubiclic.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
