import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_reverb.com_dz2', ['https://reverb.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
