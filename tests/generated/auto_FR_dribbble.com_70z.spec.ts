import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dribbble.com_70z', ['https://dribbble.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
