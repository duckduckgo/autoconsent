import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_reverb.com_h2w', ['https://reverb.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
