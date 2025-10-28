import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_youprice.fr_w6g', ['https://youprice.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
