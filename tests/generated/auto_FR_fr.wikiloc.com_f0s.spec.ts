import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.wikiloc.com_f0s', ['https://fr.wikiloc.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
