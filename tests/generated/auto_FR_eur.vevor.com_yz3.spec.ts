import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_eur.vevor.com_yz3', ['https://eur.vevor.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
