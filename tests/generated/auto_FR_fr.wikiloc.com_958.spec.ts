import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.wikiloc.com_958', ['https://fr.wikiloc.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
