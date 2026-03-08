import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.florame.com_gre', ['https://fr.florame.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
