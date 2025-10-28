import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.wix.com_w3y', ['https://fr.wix.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
