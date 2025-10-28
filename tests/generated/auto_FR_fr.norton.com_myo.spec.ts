import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.norton.com_myo', ['https://fr.norton.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
