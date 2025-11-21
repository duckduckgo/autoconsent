import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.redtube.com_sri', ['https://fr.redtube.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
