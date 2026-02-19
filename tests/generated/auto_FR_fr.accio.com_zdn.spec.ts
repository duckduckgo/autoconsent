import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.accio.com_zdn', ['https://fr.accio.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
