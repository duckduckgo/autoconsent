import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.accio.com_ux8', ['https://fr.accio.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
